<?php

namespace App\Services\Administrator;

use Throwable;
use Illuminate\Support\Str;
use App\Helpers\ResponseHelper;
use App\Exceptions\CustomException;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use App\Http\Requests\Administrator\CoursesRequest;
use App\Repository\Administrator\CoursesRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CoursesService
{
    public static function getAll()
    {
        try {
            $data = CoursesRepository::getAll();
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function listTrash()
    {
        try {
            $data = CoursesRepository::getTrashed();
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function findById(string $id)
    {
        try {
            $data = CoursesRepository::getById($id);
            return ResponseHelper::success($data);
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Batch');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function insert($request)
    {
        try {
            $adminId = auth()->guard('admin')->user()->id;
            $imageData = self::processImage($request, $adminId);
            $data = array_merge($imageData, [
                'created_by' => $adminId,
                'slug' => Str::slug($request->title),
            ]);
            $batch = CoursesRepository::insert([...$data]);

            return ResponseHelper::created($batch, 'Course berhasil dibuat', 201);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function duplicateId(string $id)
    {
        return CoursesRepository::duplicateId($id);

    }

    public static function update(string $id, CoursesRequest $request)
    {
        try {
            $adminId = auth()->guard('admin')->user()->id;
            $imageData = self::processImage($request, $adminId);
            $data = array_merge($imageData, [
                'created_by' => $adminId,
                'slug' => Str::slug($request->title),
            ]);
            CoursesRepository::update($id, [...$data]);

            return ResponseHelper::success(null, 'Course berhasil diperbarui');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Course');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function deleteSoft($id)
    {
        try {
            $course = CoursesRepository::deleteSoft($id);
            if ($course) {
                return ResponseHelper::success(null, 'Course di hapus, dan tersedia di trash');
            }
            throw CustomException::notFound('Course');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Course');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function restoreSoft($id)
    {
        try {
            $course = CoursesRepository::restoreSoft($id);
            if ($course) {
                return ResponseHelper::success(null, 'Course di restore');
            }
            throw CustomException::notFound('Course');
        } catch (Throwable $th) {
            return self::handleError($th);

        }
    }

    public static function delete($id)
    {
        try {
            $course = CoursesRepository::delete($id);
            if ($course) {
                return ResponseHelper::success(null, 'Course di hapus permanen');
            }
            throw CustomException::notFound('Course');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Course');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    /**
     * Handle errors uniformly.
     */
    private static function handleError(Throwable $th)
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }

    private static function processImage(CoursesRequest $request, ?string $id = null): array
    {
        $data = $request->validated();

        if ($request->hasFile('imageUrl')) {

            $file = $request->file('imageUrl');
     
            // create new manager instance with desired driver
            $manager = new ImageManager(new Driver);

            // Generate a unique file name
            $filename = 'Image_LMS_' . hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

            // read image from filesystem then compress them :)
            $image = $manager->read($file);
            $image = $image->resize(300, 300);
            $image->toJpeg(80)->save(storage_path('app/public/uploads/' . $filename));

            $data['imageUrl'] = "uploads/$filename";

            // Remove old image if updating
            if ($id) {
                $existingCategory = CoursesRepository::getById($id);
                if ($existingCategory && isset($existingCategory->imageUrl)) {
                    Storage::disk('public')->delete($existingCategory->imageUrl);
                }
            }
        }

        return $data;
    }
}

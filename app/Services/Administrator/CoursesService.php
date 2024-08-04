<?php

namespace App\Services\Administrator;

use Throwable;
use App\Helpers\ResponseHelper;
use App\Helpers\UploadFileHelper;
use App\Exceptions\CustomException;
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
            $data = UploadFileHelper::uploadFile($request);
            $batch = CoursesRepository::insert($data);

            return ResponseHelper::created($batch, 'Course berhasil dibuat', 201);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function statusCourse($id)
    {
        try {
            $data = CoursesRepository::statusCourse($id);

            return ResponseHelper::success($data);
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
            $data = UploadFileHelper::uploadFile($request, $id, CoursesRepository::class);
            CoursesRepository::update($id, $data);

            return ResponseHelper::success(null, 'Course berhasil diperbarui');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Course');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function deleteSoft($id)
    {
        if (!CoursesRepository::getById($id)) {
            throw CustomException::notFound('Course');
        }

        try {
            CoursesRepository::deleteSoft($id);

            return ResponseHelper::success(null, 'Course di hapus, dan tersedia di trash');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Course');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function restoreSoft($id)
    {
        if (!CoursesRepository::getByIdOnlyTrashed($id)) {
            throw CustomException::notFound('Course');
        }

        try {
            CoursesRepository::restoreSoft($id);

            return ResponseHelper::success(null, 'Course di restore');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function delete($id)
    {
        if (!CoursesRepository::getByIdOnlyTrashed($id)) {
            throw CustomException::notFound('Course');
        }

        try {
            CoursesRepository::delete($id);

            return ResponseHelper::success(null, 'Course di hapus permanen');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function assignTrainer($id, $data)
    {
        if (!CoursesRepository::getById($id)) {
            throw CustomException::notFound('Course');
        }
        try {

            CoursesRepository::assignTrainer($id, $data);

            return ResponseHelper::success(null, 'Trainer ditambahkan ke course');
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
}

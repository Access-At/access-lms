<?php

namespace App\Services\Administrator;

use Throwable;
use App\Helpers\ResponseHelper;
use Illuminate\Http\JsonResponse;
use App\Exceptions\CustomException;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Administrator\CategoriesRequest;
use App\Repository\Administrator\CategoriesRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CategoriesService
{
    public static function getAllCategory(): JsonResponse
    {
        try {
            $data = CategoriesRepository::getAll();

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function findById(string $id): JsonResponse
    {
        try {
            $data = CategoriesRepository::findById($id);

            return ResponseHelper::success($data);
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('kategori');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function insert(CategoriesRequest $request): JsonResponse
    {
        try {
            $data = self::processImage($request);
            $category = CategoriesRepository::insert($data);

            return ResponseHelper::created($category, 'Kategori berhasil dibuat', 201);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function update(string $id, CategoriesRequest $request): JsonResponse
    {
        try {
            $data = self::processImage($request, $id);
            // Update category data
            CategoriesRepository::update($id, $data);

            return ResponseHelper::success(null, 'Kategori berhasil diperbarui');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('kategori');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function delete($id): JsonResponse
    {
        try {
            CategoriesRepository::delete($id);

            return ResponseHelper::noContent(null, 'Kategori berhasil dihapus');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('kategori');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    /**
     * Handle errors uniformly.
     */
    private function handleError(Throwable $th): JsonResponse
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }

    private function processImage(CategoriesRequest $request, ?string $id = null): array
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $file = $request->file('image');

            // Generate a unique file name
            $filename = 'Image_LMS_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('uploads', $filename, 'public');

            // Prepare data with imageUrl
            $data['imageUrl'] = $path;

            // Remove old image if updating
            if ($id) {
                $existingCategory = CategoriesRepository::findById($id);
                if ($existingCategory && isset($existingCategory->imageUrl)) {
                    Storage::disk('public')->delete($existingCategory->imageUrl);
                }
            }
        }

        return $data;
    }
}

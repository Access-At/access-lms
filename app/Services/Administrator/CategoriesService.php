<?php

namespace App\Services\Administrator;

use Throwable;
use App\Helpers\ResponseHelper;
use App\Helpers\UploadFileHelper;
use Illuminate\Http\JsonResponse;
use App\Exceptions\CustomException;
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
            $data = UploadFileHelper::uploadFile($request);
            $category = CategoriesRepository::insert($data);

            return ResponseHelper::created($category, 'Kategori berhasil dibuat', 201);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function update(string $id, CategoriesRequest $request): JsonResponse
    {
        try {
            $data = UploadFileHelper::uploadFile($request, $id, CategoriesRepository::class);
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
    private static function handleError(Throwable $th): JsonResponse
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }
}

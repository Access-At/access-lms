<?php

namespace App\Services\Administrator;

use Throwable;
use Illuminate\Support\Str;
use App\Helpers\ResponseHelper;
use App\Exceptions\CustomException;
use App\Repository\Administrator\BatchsRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BatchesService
{
    public static function getAll()
    {
        try {
            $data = BatchsRepository::getAll();

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function getAllTrashed()
    {
        try {
            $data = BatchsRepository::getAllTrashed();

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function findById(string $id)
    {
        try {
            $data = BatchsRepository::findById($id);

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
            $data = [
                'slug' => Str::slug($request->title),
                'title' => $request->title,
            ];
            $batch = BatchsRepository::insert($data);

            return ResponseHelper::created($batch, 'Batch berhasil dibuat', 201);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function update(string $id, $request)
    {
        try {
            $data = [
                'title' => $request->title,
                'slug' => Str::slug($request->title),
            ];
            BatchsRepository::update($id, $data);

            return ResponseHelper::success(null, 'Batch berhasil diperbarui');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Batch');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function deleteSoft($id)
    {
        try {

            $batch = BatchsRepository::deleteSoft($id);
            if ($batch) {
                return ResponseHelper::success(null, 'Batch berhasil dihapus, dan tersedia di trash');
            }
            throw CustomException::notFound('Batch');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Batch');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function restoreSoft($id)
    {
        try {
            $batch = BatchsRepository::restoreSoft($id);
            if ($batch) {
                return ResponseHelper::success(null, 'Batch berhasil dikembalikan');
            }
            throw CustomException::notFound('Batch');
        } catch (Throwable $th) {
            return self::handleError($th);

        }
    }

    public static function delete($id)
    {
        try {
            $batch = BatchsRepository::delete($id);
            if ($batch) {
                return ResponseHelper::success(null, 'Batch berhasil dihapus permanen');
            }
            throw CustomException::notFound('Batch');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Batch');
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

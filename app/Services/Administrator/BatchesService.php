<?php

namespace App\Services\Administrator;

use Throwable;
use App\Helpers\ResponseHelper;
use App\Exceptions\CustomException;
use App\Repository\Administrator\BatchesRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Resources\Administrator\Batches\BatchesResource;

class BatchesService
{
    public static function getAll()
    {
        try {
            $data = BatchesRepository::getAll();
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function getAllTrashed()
    {
        try {
            $data = BatchesRepository::getAllTrashed();
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function findById(string $id)
    {
        try {
            $data = new BatchesResource(BatchesRepository::findById($id));
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
            $batch = BatchesRepository::insert($request);
            return ResponseHelper::created($batch, 'Batch berhasil dibuat', 201);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function update(string $id, $request)
    {
        try {
            BatchesRepository::update($id, $request);
            return ResponseHelper::success(null, 'Batch berhasil diperbarui');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Batch');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function deleteSoft($id)
    {
        if (!BatchesRepository::findById($id)) {
            throw CustomException::notFound('Batch');
        }

        try {
            BatchesRepository::deleteSoft($id);
            return ResponseHelper::success(null, 'Batch berhasil dihapus, dan tersedia di trash');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Batch');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function restoreSoft($id)
    {
        if (!BatchesRepository::findByIdWithTrash($id)) {
            throw CustomException::notFound('Batch');
        }

        try {
            BatchesRepository::restoreSoft($id);

            return ResponseHelper::success(null, 'Batch berhasil dikembalikan');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function delete($id)
    {
        try {
            BatchesRepository::delete($id);

            return ResponseHelper::success(null, 'Batch berhasil dihapus permanen');
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

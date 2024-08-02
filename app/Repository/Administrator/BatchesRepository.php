<?php

namespace App\Repository\Administrator;

use App\Models\Batch;
use App\Http\Resources\Administrator\Batches\BatchesCollection;

class BatchesRepository
{
    public static function getAll()
    {
        return new BatchesCollection(Batch::withoutTrashed()->latest()->paginate(10));
    }

    public static function getAllTrashed()
    {
        return new BatchesCollection(Batch::onlyTrashed()->paginate(10));
    }

    public static function findById($id)
    {
        return Batch::withoutTrashed()->find($id);
    }

    public static function findByIdWithTrash($id)
    {
        return Batch::onlyTrashed()->find($id);
    }

    public static function insert(array $data): Batch
    {
        return Batch::create($data);
    }

    public static function update($id, array $data)
    {
        $batch = self::findById($id);
        if ($batch) {
            $batch->update($data);

            return $batch;
        }

        return false;
    }

    public static function deleteSoft($id)
    {
        return self::findWithTrashed($id, function ($batch) {
            return $batch->delete(); // Soft delete
        });
    }

    public static function restoreSoft($id)
    {
        return self::findOnlyTrashed($id, function ($batch) {
            return $batch->restore(); // Restore the soft deleted record
        });
    }

    public static function delete($id)
    {
        return self::findOnlyTrashed($id, function ($batch) {
            return $batch->forceDelete(); // Permanently delete the record
        });
    }

    private static function findWithTrashed($id, callable $callback)
    {
        $batch = Batch::withTrashed()->find($id);
        if ($batch) {
            return $callback($batch);
        }

        return false;
    }

    private static function findOnlyTrashed($id, callable $callback)
    {
        $batch = Batch::onlyTrashed()->find($id);
        if ($batch) {
            return $callback($batch);
        }

        return false;
    }
}

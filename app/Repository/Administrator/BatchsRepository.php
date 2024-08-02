<?php

namespace App\Repository\Administrator;

use App\Models\Batch;

class BatchsRepository
{
    public static function getAll()
    {
        return Batch::withoutTrashed()->latest()->paginate(10);
    }

    public static function getAllTrashed()
    {
        return Batch::onlyTrashed()->paginate(10);
    }

    public static function findById($id)
    {
        return Batch::whereNull('deleted_at')->find($id);
    }

    public static function insert(array $data): Batch
    {
        return Batch::create($data);
    }

    public static function update($id, array $data)
    {
        $batch = self::findById($id);
        if ($batch) {
            return $batch->update($data);
        }

        return false;
    }

    public static function deleteSoft($id)
    {
        $batch = Batch::withTrashed()->find($id);
        if ($batch) {
            return $batch->delete(); // Soft delete
        }

        return false;

    }

    public static function restoreSoft($id)
    {
        $batch = Batch::onlyTrashed()->find($id);
        if ($batch) {
            return $batch->restore(); // Restore the soft deleted record
        }

        return false;
    }

    public static function delete($id)
    {
        $batch = Batch::onlyTrashed()->find($id);
        if ($batch) {
            return $batch->forceDelete(); // Permanently delete the record
        }

        return false;
    }
}

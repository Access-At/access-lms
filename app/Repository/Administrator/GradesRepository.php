<?php

namespace App\Repository\Administrator;

use App\Models\Grade;

class GradesRepository
{
    public static function getGrades()
    {
        return Grade::get();
    }

    public static function storeGrade($request)
    {
        return Grade::create($request);
    }

    public static function findById($id)
    {
        return Grade::findOrFail($id);
    }

    public static function updateGrade($gradeId, $request)
    {
        $grade = self::findById($gradeId);

        return $grade ? $grade->update($request) : false;
    }

    public static function deleteGrade($gradeId)
    {
        $grade = self::findById($gradeId);

        return $grade ? $grade->delete() : false;
    }
}

<?php

namespace App\Repository\Administrator;

use App\Models\Courses;

class CoursesRepository
{
    public static function getAll()
    {
        return Courses::relation()->withoutTrashed()->get();
    }

    public static function getTrashed()
    {
        return Courses::relation()->onlyTrashed()->get();
    }

    public static function getById($id)
    {
        return Courses::withoutTrashed()->find($id);
    }

    public static function insert(array $data)
    {
        return Courses::create($data);
    }

    public static function update($id, $data)
    {
        $course = self::getById($id);
        if ($course) {
            return $course->update($data);
        }

        return false;
    }

    public static function duplicateId(string $id)
    {
        $original = self::getById($id);
        $newCoursesCopy = $original->replicate();
        $newCoursesCopy->title = $original->title . ' Copy';
        $newCoursesCopy->save();

        return $newCoursesCopy;
    }

    public static function deleteSoft($id)
    {
        $course = Courses::withTrashed()->find($id);
        if ($course) {
            return $course->delete();
        }

        return false;
    }

    public static function restoreSoft($id)
    {
        $course = Courses::onlyTrashed()->find($id);
        if ($course) {
            return $course->restore();
        }

        return false;
    }

    public static function delete($id)
    {
        $course = Courses::onlyTrashed()->find($id);
        if ($course) {
            return $course->forceDelete();
        }

        return false;
    }
}

<?php

namespace App\Repository\Administrator;

use App\Models\Courses;
use App\Http\Resources\Administrator\Courses\CoursesResource;

class CoursesRepository
{
    public static function getAll()
    {
        $filters = [
            'title' => ['operator' => 'like', 'value' => request()->input('title')],
        ];

        return CoursesResource::collection(Courses::relation()->withoutTrashed()->paginate(10));
    }

    public static function statusCourse($id)
    {
        $publish = Courses::where('status', 'draft')->find($id);
        $publish->status = 'publish';
        $publish->save();

        return $publish;
    }

    public static function getTrashed()
    {
        return Courses::relation()->onlyTrashed()->get();
    }

    public static function getById($id)
    {
        return Courses::relation()->withoutTrashed()->find($id);
    }

    public static function getByIdOnlyTrashed($id)
    {
        return Courses::onlyTrashed()->find($id);
    }

    public static function insert(array $data)
    {
        return Courses::create($data);
    }

    public static function update($id, array $data)
    {
        $course = self::getById($id);

        return $course ? $course->update($data) : false;
    }

    public static function duplicateId($id)
    {
        $original = self::getById($id);

        if ($original) {
            $newCourse = $original->replicate();
            $newCourse->title = $original->title . ' Copy';
            $newCourse->trainer_by = null;
            $newCourse->save();

            return $newCourse;
        }

        return null;
    }

    public static function deleteSoft($id)
    {
        $course = Courses::withTrashed()->find($id);

        return $course ? $course->delete() : false;
    }

    public static function restoreSoft($id)
    {
        $course = Courses::onlyTrashed()->find($id);

        return $course ? $course->restore() : false;
    }

    public static function delete($id)
    {
        $course = Courses::onlyTrashed()->find($id);

        return $course ? $course->forceDelete() : false;
    }

    public static function assignTrainer($id, $request)
    {
        $course = self::getById($id);
        $data['trainer_by'] = $request->trainer_by;

        return $course ? $course->update($data) : false;
    }
}

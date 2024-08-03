<?php

namespace App\Repository\Administrator;

use App\Models\CoursesCurriculum;

class CoursesCurriculumRepository
{
    public static function getCurriculum($courseId)
    {
        return CoursesCurriculum::courseId($courseId)->get();
    }

    public static function storeCurriculum($courseId, $data)
    {
        return CoursesCurriculum::courseId($courseId)->create([
            'title' => $data->title,
            'course_id' => $courseId,
        ]);
    }

    public static function updateCurriculum($courseId, $curriculumId, $request)
    {
        $curriculum = CoursesCurriculum::courseId($courseId)->findOrFail($curriculumId);

        return $curriculum->update([
            'title' =>  $request->title,
            'course_id' => $courseId,
        ]);
    }

    public static function deleteCurriculum($courseId, $curriculumId)
    {
        $curriculum = CoursesCurriculum::courseId($courseId)->findOrFail($curriculumId);
        if (!$curriculum) {
            return false;
        }

        return $curriculum->delete();

    }
}

<?php

namespace App\Repository\Administrator;

use App\Models\CoursesBenefits;

class CoursesBenefitRepository
{
    public static function getBenefit($courseId)
    {
        return CoursesBenefits::courseId($courseId)->get();
    }

    public static function storeBenefit($courseId, $data)
    {
        return CoursesBenefits::courseId($courseId)->create([
            'title' => $data->title,
            'desc' => $data->desc,
            'course_id' => $courseId,
        ]);
    }

    public static function updateBenefit($courseId, $curriculumId, array $request)
    {
        $curriculum = CoursesBenefits::courseId($courseId)->findOrFail($curriculumId);

        return $curriculum->update([
            'title' => $request['title'],
            'desc' => $request['desc'],
            'course_id' => $courseId,
        ]);
    }

    public static function deleteBenefit($courseId, $curriculumId)
    {
        $curriculum = CoursesBenefits::courseId($courseId)->findOrFail($curriculumId);

        return $curriculum->delete();
    }
}

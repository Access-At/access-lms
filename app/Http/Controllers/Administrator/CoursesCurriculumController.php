<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Services\Administrator\CourseCurriculumService;
use App\Http\Requests\Administrator\CoursesCurriculumRequest;

class CoursesCurriculumController extends Controller
{
    public function listCurriculum(string $id)
    {
        return CourseCurriculumService::getCurriculumWithCourse($id);
    }

    public function createCurriculum(string $id, CoursesCurriculumRequest $request)
    {
        return CourseCurriculumService::storeCurriculumWithCourse($id, $request);
    }

    public function updateCurriculum(string $courseId, string $id, CoursesCurriculumRequest $request)
    {
        return CourseCurriculumService::updateCurriculumWithCourse($courseId, $id, $request);
    }

    public function deleteCurriculum($courseId, string $id)
    {
        return CourseCurriculumService::deleteCurriculumWithCourse($courseId, $id);
    }
}

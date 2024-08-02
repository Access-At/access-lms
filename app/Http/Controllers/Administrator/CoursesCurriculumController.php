<?php

namespace App\Http\Controllers\Administrator;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Administrator\CoursesCurriculumRequest;
use App\Services\Administrator\CourseCurriculumService;

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
        $req = $request->all();
        return CourseCurriculumService::updateCurriculumWithCourse($courseId, $id, $req);
    }

    public function deleteCurriculum($courseId,string $id)
    {
        return CourseCurriculumService::deleteCurriculumWithCourse($courseId, $id);
    }
}

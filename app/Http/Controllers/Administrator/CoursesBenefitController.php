<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Services\Administrator\CourseBenefitService;
use App\Http\Requests\Administrator\CoursesBenefitRequest;

class CoursesBenefitController extends Controller
{
    public function list(string $id)
    {
        return CourseBenefitService::getBenefitWithCourse($id);
    }

    public function store(string $id, CoursesBenefitRequest $request)
    {
        return CourseBenefitService::storeBenefitWithCourse($id, $request);
    }

    public function update(string $courseId, string $id, CoursesBenefitRequest $request)
    {
        $req = $request->all();

        return CourseBenefitService::updateBenefitWithCourse($courseId, $id, $req);
    }

    public function delete($courseId, string $id)
    {
        return CourseBenefitService::deleteBenefitWithCourse($courseId, $id);
    }
}

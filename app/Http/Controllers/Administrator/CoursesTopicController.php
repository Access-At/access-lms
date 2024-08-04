<?php

namespace App\Http\Controllers\Administrator;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Administrator\CourseTopicService;
use App\Http\Requests\Administrator\CoursesTopicRequest;

class CoursesTopicController extends Controller
{
    public function list($courseId)
    {
        return CourseTopicService::getTopicsWithCourse($courseId);
    }

    public function store(string $courseId, CoursesTopicRequest $request)
    {
        return CourseTopicService::storeTopicWithCourse($courseId, $request->only('title', 'order', 'content', 'course_id'));
    }

    public function update(Request $request, $id) {}

    public function destroy(string $courseId, string $id)
    {
        return CourseTopicService::destroyTopicWithCourse($courseId, $id);
    }
}

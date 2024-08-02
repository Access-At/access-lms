<?php

namespace App\Services\Administrator;

use Throwable;
use Illuminate\Support\Str;
use App\Helpers\ResponseHelper;
use App\Exceptions\CustomException;
use App\Repository\Administrator\CoursesRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Repository\Administrator\CoursesCurriculumRepository;

class CourseCurriculumService
{

    public static function getCurriculumWithCourse(string $id)
    {
        try {
            $data = CoursesCurriculumRepository::getCurriculum($id);
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function storeCurriculumWithCourse(string $courseId,$request){
        try {
            $data = CoursesCurriculumRepository::storeCurriculum($courseId, $request);
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function updateCurriculumWithCourse(string $courseId, string $curriculumId, array $request)
    {
        try {
            CoursesCurriculumRepository::updateCurriculum($courseId, $curriculumId, $request);
            return ResponseHelper::success(null, 'Course Curriculum successfully updated', 200);
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Course Curriculum');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function deleteCurriculumWithCourse(string $courseId, string $curriculumId){
        try {
            CoursesCurriculumRepository::deleteCurriculum($courseId, $curriculumId);
            return ResponseHelper::success(null, 'Course Curriculum successfully deleted');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Course Curriculum');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    private static function handleError(Throwable $th)
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }

}

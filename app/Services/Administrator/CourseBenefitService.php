<?php

namespace App\Services\Administrator;

use Throwable;
use App\Helpers\ResponseHelper;
use App\Exceptions\CustomException;
use App\Repository\Administrator\CoursesBenefitRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CourseBenefitService
{

    public static function getBenefitWithCourse(string $courseId)
    {
        try {
            $data = CoursesBenefitRepository::getBenefit($courseId);
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function storeBenefitWithCourse(string $courseId,$request){
        try {
            $data = CoursesBenefitRepository::storeBenefit($courseId, $request);
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function updateBenefitWithCourse(string $courseId, string $benefitId, array $request)
    {
        try {
            CoursesBenefitRepository::updateBenefit($courseId, $benefitId, $request);
            return ResponseHelper::success(null, 'Course Benefit successfully updated');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Course Benefit');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function deleteBenefitWithCourse(string $courseId, string $benefitId){
        try {
            CoursesBenefitRepository::deleteBenefit($courseId, $benefitId);
            return ResponseHelper::success(null, 'Course Benefit successfully deleted');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Course Benefit');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    private static function handleError(Throwable $th)
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }

}

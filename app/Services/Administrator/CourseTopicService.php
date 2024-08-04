<?php

namespace App\Services\Administrator;

use Throwable;
use App\Helpers\ResponseHelper;
use App\Repository\Administrator\CoursesTopicRepository;

class CourseTopicService
{
    public static function getTopicsWithCourse($courseId)
    {
        try {
            $data = CoursesTopicRepository::get($courseId);

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function storeTopicWithCourse($courseId, array $request)
    {
        try {
            $data = CoursesTopicRepository::store($courseId, $request);

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function updateTopicWithCourse($courseId, $topicId, array $request)
    {
        try {
            $data = CoursesTopicRepository::update($courseId, $topicId, $request);

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function destroyTopicWithCourse($courseId, $topicId)
    {
        try {
            $data = CoursesTopicRepository::delete($courseId, $topicId);
            if (!$data) {
                return ResponseHelper::notFound('Topic');
            }

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    /**
     * Handle errors uniformly.
     */
    private static function handleError(Throwable $th)
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }
}

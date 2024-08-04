<?php

namespace App\Services\Administrator;

use Throwable;
use App\Helpers\ResponseHelper;
use App\Exceptions\CustomException;
use App\Repository\Administrator\GradesRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class GradesService
{
    public static function getAllGrades()
    {
        try {
            $data = GradesRepository::getGrades();

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function getGrade($id)
    {
        try {
            $data = GradesRepository::findById($id);

            return ResponseHelper::success($data);
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Grade');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function storeGrade($request)
    {
        try {
            $data = GradesRepository::storeGrade($request);

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function updateGrade(string $gradeId, $request)
    {
        try {
            GradesRepository::updateGrade($gradeId, $request->validated());

            return ResponseHelper::success(null, 'Grade successfully updated');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Grade');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function deleteGrade(string $pageId)
    {
        try {
            GradesRepository::deleteGrade($pageId);

            return ResponseHelper::success(null, 'Grade successfully deleted');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Grade');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    private static function handleError(Throwable $th)
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }
}

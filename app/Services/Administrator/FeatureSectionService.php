<?php

namespace App\Services\Administrator;

use Throwable;
use App\Helpers\ResponseHelper;
use App\Exceptions\CustomException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Repository\Administrator\FeatureSectionRepository;

class FeatureSectionService
{
    public static function getFeature()
    {
        try {
            $data = FeatureSectionRepository::getFeatures();
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function storeFeature($request)
    {
        try {
            $data = FeatureSectionRepository::storeFeature($request);
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function updateFeature(string $pageId, $request)
    {
        try {
            FeatureSectionRepository::updateFeature($pageId, $request);
            return ResponseHelper::success(null, 'Feature successfully updated');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Feature');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function deleteFeature(string $featureId)
    {
        try {
            FeatureSectionRepository::deleteFeature($featureId);

            return ResponseHelper::success(null, 'Feature successfully deleted');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Feature');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    private static function handleError(Throwable $th)
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }
}

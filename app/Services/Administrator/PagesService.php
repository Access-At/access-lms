<?php

namespace App\Services\Administrator;

use Throwable;
use App\Helpers\ResponseHelper;
use App\Exceptions\CustomException;
use App\Repository\Administrator\PagesRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PagesService
{
    public static function getAllPages()
    {
        try {
            $data = PagesRepository::getPages();

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function getPages($id)
    {
        try {
            $data = PagesRepository::findById($id);
            return ResponseHelper::success($data);
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Pages');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function storePage($request)
    {
        try {
            $data = PagesRepository::storePage($request);
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function updatePage(string $pageId, $request)
    {
        try {
            PagesRepository::updatePage($pageId, $request->validated());
            return ResponseHelper::success(null, 'Pages successfully updated');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Pages');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function deletePage(string $pageId)
    {
        try {
            PagesRepository::deletePage($pageId);
            return ResponseHelper::success(null, 'Pages successfully deleted');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('Pages');
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    private static function handleError(Throwable $th)
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }
}

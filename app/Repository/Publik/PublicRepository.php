<?php

use App\Models\FeatureSection;
use App\Helpers\ResponseHelper;
use App\Models\Category;
use App\Models\Courses;

class PublicRepository
{
    public static function geFeatures()
    {
         try {
            $data = FeatureSection::orderBy('created_at', 'asc')->get();
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }
    public static function getCategories()
    {
         try {
            $data = Category::withCount('courses')->orderBy('created_at', 'desc')->get();
            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }


    public static function getCourses()
    {
        try {
            $limit = request('limit', 4);
            $data = Courses::with('category')->orderBy('created_at', 'desc')->limit($limit)->get();
            return ResponseHelper::success($data);
        } catch (\Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function getCourseBySlug($slug)
    {
        try {
            $data = Courses::relation()->where('slug', $slug)->first();
            if(!$data) throw new \Exception('Course not found');
            return ResponseHelper::success($data);
        } catch (\Throwable $th) {
            return self::handleError($th);
        }
    }
    private static function handleError(Throwable $th)
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }
}
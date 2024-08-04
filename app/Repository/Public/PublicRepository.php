<?php

namespace App\Repository\Public;

use Throwable;
use App\Models\Courses;
use App\Models\Category;
use App\Models\FeatureSection;
use App\Helpers\ResponseHelper;
use App\Exceptions\CustomException;
use App\Http\Resources\Public\CoursesCollection;
use App\Http\Resources\Public\CourseSlugResource;
use App\Http\Resources\Public\CategoriesCollection;

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
            $data = new CategoriesCollection(Category::withCount('courses')->orderBy('created_at', 'desc')->get());

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function getCourses()
    {
        try {
            $data = new CoursesCollection(Courses::with('category')->isPublish()->orderBy('created_at', 'desc')->take(4)->get());

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    public static function getCourseBySlug($slug)
    {

        try {
            $course = Courses::isPublish()->where('slug', $slug)->first();
            if (!$course) {
                throw CustomException::notFound('Course');
            }

            $data = new CourseSlugResource($course);

            return ResponseHelper::success($data);
        } catch (Throwable $th) {
            return self::handleError($th);
        }
    }

    private static function handleError(Throwable $th)
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }
}

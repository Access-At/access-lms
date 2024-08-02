<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Repository\Public\PublicRepository;

class PublicController extends Controller
{
    public function getFeatures()
    {
        return PublicRepository::geFeatures();
    }

    public function getCategories()
    {
        return PublicRepository::getCategories();
    }

    public function getCourses()
    {
        return PublicRepository::getCourses();
    }

    public function getCoursesBySlug($slug)
    {
        return PublicRepository::getCourseBySlug($slug);
    }
}

<?php

namespace App\Http\Controllers\Publik;

use App\Http\Controllers\Controller;
use PublicRepository;

class PublikController extends Controller
{
    public function getFeatures()
    {
        return PublicRepository::geFeatures();
    }

    public function getCategories(){
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
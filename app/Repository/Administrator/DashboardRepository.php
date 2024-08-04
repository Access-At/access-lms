<?php

namespace App\Repository\Administrator;

use App\Models\User;
use App\Models\Batch;
use App\Models\Courses;
use App\Models\Category;

class DashboardRepository
{
    public static function getCountData()
    {
        return [
            'courses' => [
                'publish' => Courses::isPublish()->count(),
                'draft' => Courses::where('status', 'draft')->count(),
            ],
            'categories' => Category::count(),
            'users' => User::count(),
            'batches' => Batch::count(),
            'trainer' => Batch::count(),
        ];
    }
}

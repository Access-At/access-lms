<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Services\Administrator\DashboardService;

class DashboardController extends Controller
{
    public function getData()
    {
        return DashboardService::getCountData();
    }
}

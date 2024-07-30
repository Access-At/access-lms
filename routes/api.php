<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\Administrator\AuthController;
use App\Http\Controllers\Administrator\CategoriesController;

Route::prefix('v1')->group(function () {

    Route::prefix('admin')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);

        Route::group(['middleware' => 'auth:admin'], function () {
            Route::get('/user', [AuthController::class, 'getUser']);
            Route::get('/refresh', [AuthController::class, 'refreshToken']);
            Route::post('/logout', [AuthController::class, 'logout']);

            Route::apiResource('categories', CategoriesController::class);
        });
    });

    Route::get('/test', [TestController::class, 'index']);

    // trainer => auth:trainer

    // user => auth:web
});

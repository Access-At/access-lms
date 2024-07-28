<?php

use App\Http\Controllers\Administrator\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::post('login', [AuthController::class, 'login']);
        Route::group(['middleware' => 'auth:admin'], function() {
            Route::get('/user', [AuthController::class, 'getUser']);
            Route::get('/refresh', [AuthController::class, 'refreshToken']);
            Route::post('/logout', [AuthController::class, 'logout']);
        });
    });

    // trainer => auth:trainer

    // user => auth:web
});
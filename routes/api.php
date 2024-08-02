<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\Administrator\AuthController;
use App\Http\Controllers\Administrator\BatchesController;
use App\Http\Controllers\Administrator\CoursesController;
use App\Http\Controllers\Administrator\CategoriesController;

Route::prefix('v1')->group(function () {

    Route::prefix('admin')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);

        Route::group(['middleware' => 'auth:admin'], function () {
            Route::get('/user', [AuthController::class, 'getUser']);
            Route::get('/refresh', [AuthController::class, 'refreshToken']);
            Route::post('/logout', [AuthController::class, 'logout']);

            Route::apiResource('categories', CategoriesController::class);

            Route::prefix('batches')->group(function () {
                Route::get('', [BatchesController::class, 'index']);
                Route::get('/arsip', [BatchesController::class, 'getTrash']); // data semua yang di trash
                Route::get('/{batch}', [BatchesController::class, 'show']);
                Route::post('', [BatchesController::class, 'store']);
                Route::put('/{batch}', [BatchesController::class, 'update']);
                Route::delete('/{batch}', [BatchesController::class, 'destroy']);
                Route::put('/{batch}/trash', [BatchesController::class, 'trash']); // hapus dipindahkan ketong sampah
                Route::put('/{batch}/restore', [BatchesController::class, 'restore']); // mengambil kembali ke data setelah direstore

            });

            Route::prefix('courses')->group(function () {
                Route::get('', [CoursesController::class, 'index']);
                Route::get('/arsip', [CoursesController::class, 'listTrash']);
                Route::post('', [CoursesController::class, 'store']);
                Route::get('/{course}', [CoursesController::class, 'show']);
                Route::post('/{course}/duplicate', [CoursesController::class, 'duplicate']);
                Route::put('/{course}', [CoursesController::class, 'update']);
                Route::put('/{course}/trash', [CoursesController::class, 'trash']);
                Route::put('/{course}/restore', [CoursesController::class, 'restore']);
                Route::delete('/{course}', [CoursesController::class, 'destroy']);
            });
        });
    });

    Route::get('/test', [TestController::class, 'index']);

    // trainer => auth:trainer

    // user => auth:web
});

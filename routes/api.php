<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\Public\PublicController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Administrator\PagesController;
use App\Http\Controllers\Administrator\BatchesController;
use App\Http\Controllers\Administrator\CoursesController;
use App\Http\Controllers\Administrator\CategoriesController;
use App\Http\Controllers\Administrator\CoursesBenefitController;
use App\Http\Controllers\Administrator\CoursesCurriculumController;
use App\Http\Controllers\Administrator\FeatureSectionController;

Route::prefix('v1')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    
    Route::prefix('admin')->group(function () {
        
        Route::group(['middleware' => 'auth:admin'], function () {
            Route::get('/user', [AuthController::class, 'getUser']);
            Route::get('/refresh', [AuthController::class, 'refreshToken']);
            Route::post('/logout', [AuthController::class, 'logout']);

            Route::apiResource('categories', CategoriesController::class);

            Route::prefix('batches')->group(function () {
                Route::get('/', [BatchesController::class, 'index']);
                Route::get('/arsip', [BatchesController::class, 'getTrash']); // data semua yang di trash
                Route::get('/{batch}', [BatchesController::class, 'show']);
                Route::post('/', [BatchesController::class, 'store']);
                Route::put('/{batch}', [BatchesController::class, 'update']);
                Route::delete('/{batch}', [BatchesController::class, 'destroy']);
                Route::put('/{batch}/trash', [BatchesController::class, 'trash']); // hapus dipindahkan ketong sampah
                Route::put('/{batch}/restore', [BatchesController::class, 'restore']); // mengambil kembali ke data setelah direstore

            });

            Route::prefix('courses')->group(function () {
                Route::get('/', [CoursesController::class, 'index']);
                Route::get('/arsip', [CoursesController::class, 'listTrash']);
                Route::post('/', [CoursesController::class, 'store']);
                Route::get('/{course}', [CoursesController::class, 'show']);
                Route::put('/{course}/duplicate', [CoursesController::class, 'duplicate']);
                Route::put('/{course}', [CoursesController::class, 'update']);
                Route::put('/{course}/trash', [CoursesController::class, 'trash']);
                Route::put('/{course}/restore', [CoursesController::class, 'restore']);
                Route::delete('/{course}', [CoursesController::class, 'destroy']);

                // curriculum
                Route::get('/{course}/curriculum', [CoursesCurriculumController::class, 'listCurriculum']);
                Route::post('/{course}/curriculum/create', [CoursesCurriculumController::class, 'createCurriculum']);
                Route::put('/{course}/curriculum/{curriculum}/update', [CoursesCurriculumController::class, 'updateCurriculum']);
                Route::delete('/{course}/curriculum/{curriculum}/delete', [CoursesCurriculumController::class, 'deleteCurriculum']);

                Route::get('/{course}/benefit', [CoursesBenefitController::class, 'list']);
                Route::post('/{course}/benefit/create', [CoursesBenefitController::class, 'store']);
                Route::put('/{course}/benefit/{benefit}/update', [CoursesBenefitController::class, 'update']);
                Route::delete('/{course}/benefit/{benefit}/delete', [CoursesBenefitController::class, 'delete']);
            });

            Route::apiResource('pages', PagesController::class);
            Route::apiResource('feature-section', FeatureSectionController::class);

        });
    });

    Route::get('/test', [TestController::class, 'index']);

    // trainer => auth:trainer

    // user => auth:user
    Route::prefix('user')->group(function () {
        Route::group(['middleware' => 'auth:user'], function () {
            Route::get('/user', [AuthController::class, 'getUser']);
            Route::get('/refresh', [AuthController::class, 'refreshToken']);
            Route::post('/logout', [AuthController::class, 'logout']);
        });
    });

    // public
    Route::prefix('public')->group(function () {
        Route::get('/feature-section', [PublicController::class, 'getFeatures']);
        Route::get('/category', [PublicController::class, 'getCategories']);
        Route::get('/courses', [PublicController::class, 'getCourses']);
        Route::get('/courses/{slug}', [PublicController::class, 'getCoursesBySlug']);
    });
});

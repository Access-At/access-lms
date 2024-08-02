<?php

namespace App\Http\Controllers\Administrator;

use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Services\Administrator\CategoriesService;
use App\Http\Requests\Administrator\CategoriesRequest;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        return CategoriesService::getAllCategory();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoriesRequest $request): JsonResponse
    {
        return CategoriesService::insert($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        return CategoriesService::findById($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoriesRequest $request, string $id)
    {
        return CategoriesService::update($id, $request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        return CategoriesService::delete($id);
    }
}

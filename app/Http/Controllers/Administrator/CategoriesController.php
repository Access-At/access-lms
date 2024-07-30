<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Http\Requests\Administrator\CategoriesRequest;
use App\Services\Administrator\CategoriesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    protected $categoriesService;

    public function __construct(
        CategoriesService $categoriesService
    )
    {
        $this->categoriesService = $categoriesService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        return $this->categoriesService->getAllCategory();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoriesRequest $request): JsonResponse
    {
        return $this->categoriesService->insert($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        return $this->categoriesService->findById($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoriesRequest $request, string $id): JsonResponse
    {
        return $this->categoriesService->update($id, $request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        return $this->categoriesService->delete($id);
    }
}

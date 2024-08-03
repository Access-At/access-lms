<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Services\Administrator\FeatureSectionService;
use App\Http\Requests\Administrator\FeatureSectionRequest;

class FeatureSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return FeatureSectionService::getFeature();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FeatureSectionRequest $request)
    {
        return FeatureSectionService::storeFeature($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(FeatureSectionRequest $request, string $id)
    {
        return FeatureSectionService::updateFeature($id, $request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return FeatureSectionService::deleteFeature($id);
    }
}

<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Services\Administrator\FeatureSectionService;
use App\Http\Requests\Administrator\FeatureSectionRequest;

class FeatureSectionController extends Controller
{
    public function index()
    {
        return FeatureSectionService::getFeature();
    }

    public function store(FeatureSectionRequest $request)
    {
        return FeatureSectionService::storeFeature($request);
    }

    public function update($id, FeatureSectionRequest $request)
    {
        return FeatureSectionService::updateFeature($id, $request);
    }

    public function destroy($id)
    {
        return FeatureSectionService::deleteFeature($id);
    }
}

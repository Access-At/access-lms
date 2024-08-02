<?php

namespace App\Repository\Administrator;

use App\Models\FeatureSection;

class FeatureSectionRepository
{
    public static function getFeatures()
    {
        return FeatureSection::orderBy('created_at', 'asc')->get();
    }

    public static function storeFeature($request)
    {
        return FeatureSection::create([
            'title' => $request->title,
            'desc' => $request->desc]);
    }

    public static function updateFeature($featureId, $request)
    {
        $feature = FeatureSection::find($featureId);
        if (!$feature) {
            return false;
        }

        return $feature->update([
            'title' => $request['title'],
            'desc' => $request['desc'],
        ]);
    }

    public static function deleteFeature($featureId)
    {
        $page = FeatureSection::findOrFail($featureId);
        if (!$page) {
            return false;
        }

        return $page->delete();

    }
}

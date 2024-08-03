<?php

namespace App\Repository\Administrator;

use App\Models\FeatureSection;

class FeatureSectionRepository
{
    public static function findByid($id)
    {
        return FeatureSection::findOrFail($id);
    }

    public static function getFeatures()
    {
        return FeatureSection::orderBy('created_at', 'asc')->get();
    }

    public static function storeFeature($request)
    {
        return FeatureSection::create($request);
    }

    public static function updateFeature($featureId, $request)
    {
        $feature = self::findByid($featureId);

        return $feature->update($request);
    }

    public static function deleteFeature($featureId)
    {
        $page = self::findByid($featureId);

        return $page->delete();
    }
}

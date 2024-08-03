<?php

namespace App\Repository\Administrator;

use App\Models\Pages;
use Illuminate\Support\Str;

class PagesRepository
{
    public static function getPages()
    {
        return Pages::get();
    }

    public static function storePage($request)
    {
        return Pages::create($request);
    }

    public static function findById($id)
    {
        return Pages::findOrFail($id);
    }

    public static function updatePage($pageId, $request)
    {
        $page = self::findById($pageId);
        return $page->update($request);
    }

    public static function deletePage($pageId)
    {
        $page = self::findById($pageId);
        return $page->delete();

    }
}

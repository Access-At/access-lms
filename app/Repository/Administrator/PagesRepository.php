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
        return Pages::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content]);
    }

    public static function updatePage($pageId, $request)
    {
        $page = Pages::find($pageId);
        if (!$page) {
            return false;
        }

        return $page->update([
            'title' => $request['title'],
            'slug' => Str::slug($request['title']),
            'content' => $request['content'],
        ]);
    }

    public static function deletePage($pageId)
    {
        $page = Pages::findOrFail($pageId);
        if (!$page) {
            return false;
        }

        return $page->delete();

    }
}

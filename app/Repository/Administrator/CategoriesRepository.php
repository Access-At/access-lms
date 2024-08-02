<?php

namespace App\Repository\Administrator;

use App\Http\Resources\Administrator\Categories\CategoriesCollection;
use App\Http\Resources\Administrator\Categories\CategoriesResource;
use App\Models\Category;

class CategoriesRepository
{
    public static function getAll(): CategoriesCollection
    {
        $category = Category::query();
        $title = request()->query('title');
        $page = request()->query('page', 1);

        if ($title) {
            $category->where('title', 'like', "%{$title}%");
        }

        return new CategoriesCollection($category->paginate(10, ['*'], 'page', $page));
    }

    public static function findById($id): CategoriesResource
    {
        return new CategoriesResource(Category::findOrFail($id)); 
    }

    public static function insert($data): CategoriesCollection
    {
        return new CategoriesCollection(Category::create($data));
    }

    public static function update($id, $data): bool
    {
        $category = self::findById($id);
        return $category->update($data);
    }

    public static function delete($id): bool
    {
        $category = self::findById($id);
        return $category->delete();
    }
}

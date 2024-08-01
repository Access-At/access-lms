<?php

namespace App\Repository\Administrator;

use App\Models\Category;

class CategoriesRepository
{
    public static function getAll()
    {
        $category = Category::query();
        $title = request()->query('title');
        $page = request()->query('page', 1);
        if($title) {
            $category->where('title', 'like', "%{$title}%");
        }

        return $category->paginate(10, ['*'], 'page', $page);
    }

    public static function findById($id): ?Category
    {
        return Category::findOrFail($id);
    }

    public static function insert($data): Category
    {
        return Category::create($data);
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

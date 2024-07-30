<?php

namespace App\Repository\Administrator;

use App\Models\Category;

class CategoriesRepository
{
    public static function getAll(): \Illuminate\Database\Eloquent\Collection
    {
        return Category::get();
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

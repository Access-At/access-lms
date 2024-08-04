<?php

namespace App\Repository\Administrator;

use App\Models\Category;
use App\Helpers\QueryHelper;
use App\Http\Resources\Administrator\Categories\CategoriesResource;
use App\Http\Resources\Administrator\Categories\CategoriesCollection;

class CategoriesRepository
{
    public static function getAll()
    {
        $filters = [
            'title' => ['operator' => 'like', 'value' => request()->input('title')],
        ];

        $category = Category::query();
        $category = QueryHelper::applyFilter($category, $filters);
        $page = request()->query('page', 1);

        return new CategoriesCollection($category->paginate(10, ['*'], 'page', $page));
    }

    public static function findById($id): CategoriesResource
    {
        return new CategoriesResource(Category::findOrFail($id));
    }

    public static function insert($data): CategoriesResource
    {
        return new CategoriesResource(Category::create($data));
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

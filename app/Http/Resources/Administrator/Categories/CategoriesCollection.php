<?php

namespace App\Http\Resources\Administrator\Categories;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoriesCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        // $data =
        return [
            'list' => $this->collection->transform(function ($category) {
                return [
                    'id' => $category->id,
                    'title' => $category->title,
                    'description' => mb_substr($category->description, 0, 50),
                    // "image_url" => asset($this->imageUrl)
                ];
            }),
            'pagination' => [
                'total' => $this->total(),
                'count' => $this->count(),
                'per_page' => $this->perPage(),
                'current_page' => $this->currentPage(),
                'total_pages' => $this->lastPage(),
            ],
        ];
    }
}

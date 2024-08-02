<?php

namespace App\Http\Resources\Public;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CoursesCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->transform(function ($data) {
            return [
                'id' => $data->id,
                'title' => $data->title,
                'slug' => $data->slug,
                'desc' => $data->short_desc,
                'image' => $data->imageUrl,
                'category' => $data->category->title,
            ];
        })->toArray();

    }
}

// {
//     "id": "9cab9db5-d53f-4feb-b517-9bc847068a19",
//     "title": "test",
//     "description": "asadadad",
//     "imageUrl": "uploads/images/LMS-ACCESS-0x1806286446945812.png",
//     "created_at": "2024-08-02T14:29:52.000000Z",
//     "updated_at": "2024-08-02T14:29:52.000000Z",
//     "courses_count": 0
//   }

<?php

namespace App\Http\Resources\Administrator\Batches;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class BatchesCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'list' => $this->collection->transform(function ($batch) {
                return [
                    'id' => $batch->id,
                    'title' => mb_substr($batch->title, 0, 20),
                    'slug' => $batch->slug,
                    'courses' => $batch->courses,
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

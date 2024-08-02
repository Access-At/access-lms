<?php

namespace App\Http\Resources\Administrator\Batches;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BatchesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
        ];
    }
}

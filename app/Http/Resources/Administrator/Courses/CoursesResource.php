<?php

namespace App\Http\Resources\Administrator\Courses;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CoursesResource extends JsonResource
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
            'image' => $this->imageUrl,
            'category' => $this->category->title,
            'batch' => $this->batches->title,
            'author' => [
                'username' => $this->administrator->username,
                'email' => $this->administrator->email,
            ],
            'trainer' => [
                'username' => $this->trainer->username ?? 'N/A',
                'email' => $this->trainer->email ?? 'N/A',
            ],
            'status' => $this->status,
            'isPaid' => $this->isPaid === 1 ? 'Paid' : 'Free',
            'countRelation' => [
                'topic' => $this->topics->count(),
                'curriculum' => $this->curriculums->count(),
                'benefit' => $this->benefits->count(),
            ],
            'level' => $this->level,
            'created_at' => Carbon::parse($this->created_at)->format('d M Y'),
            'updated_at' => Carbon::parse($this->updated_at)->format('d M Y'),
        ];
    }
}

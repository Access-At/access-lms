<?php

namespace App\Http\Resources\Public;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseSlugResource extends JsonResource
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
            'desc' => $this->short_desc,
            'long_desc' => $this->long_desc,
            'image' => $this->imageUrl,
            'level' => Str::title($this->level),
            'formatDateCourses' => [
                'start_date' => Carbon::parse($this->start_date)->format('d M Y'),
                'end_date' => Carbon::parse($this->end_date)->format('d M Y'),
            ],
            'status' => $this->status,
            'isPaid' => $this->isPaid === 1 ? 'Berbayar' : 'Gratis',
            'created_at' => Carbon::parse($this->created_at)->format('d M Y'),
            'updated_at' => Carbon::parse($this->updated_at)->format('d M Y'),
            'relationAttributes' => [
                'category' => $this->category->title,
                'topics' => $this->topics,
                'instructors' => Str::title($this->administrator->username),
                'benefits' => $this->benefits,
                'curriculums' => $this->curriculums,
                'batches' => $this->batches->title,
            ],
        ];
    }
}

<?php

namespace App\Http\Resources\Administrator\Courses;

use Carbon\Carbon;
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
        return [
            'list' => $this->collection->transform(function ($course) {
                return [
                    'id' => $course->id,
                    'title' => $course->title,
                    'slug' => $course->slug,
                    'short_desc' => mb_substr($course->short_desc, 0, 50),
                    'long_desc' => $course->long_desc,
                    'image' => $course->imageUrl,
                    'category' => $course->category->title,
                    'author' => [
                        'username' => $course->administrator->username,
                        'email' => $course->administrator->email,
                    ],
                    'trainer' => [
                        'username' => $course->trainer->username,
                        'email' => $course->trainer->email,
                    ],
                    'status' => $course->status,
                    'created_at' => Carbon::parse($course->created_at)->format('d M Y'),
                    'updated_at' => Carbon::parse($course->updated_at)->format('d M Y'),
                    'start_date' => Carbon::parse($course->start_date)->format('d M Y'),
                    'end_date' => Carbon::parse($course->end_date)->format('d M Y'),
                    'level' => $course->level,
                    'isPaid' => $course->isPaid,
                    'relation' => [
                        'category' => $course->category,
                        'curriculums' => $course->curriculums,
                        'benefits' => $course->benefits,
                        'topics' => $course->topics,
                    ],
                ];
            }),
        ];
    }
}

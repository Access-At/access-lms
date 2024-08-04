<?php

namespace App\Repository\Administrator;

use App\Models\CoursesTopics;

class CoursesTopicRepository
{
    public static function get($courseId)
    {
        return CoursesTopics::courseId($courseId)->get();
    }

    public static function store($courseId, array $data)
    {
        $lastOrder = CoursesTopics::where('course_id', $courseId)->max('order');
        $newOrder = $lastOrder ? $lastOrder + 1 : 1;

        return CoursesTopics::courseId($courseId)->create([
            'title' => $data['title'],
            'order' => $newOrder,
            'content' => $data['content'],
            'course_id' => $courseId,
        ]);
    }

    public static function update($courseId, $id, $data)
    {
        return CoursesTopics::where(['course_id' => $courseId, 'id' => $id])->update($data);
    }

    public static function delete($courseId, $id)
    {
        return CoursesTopics::where('course_id', $courseId)->findOrFail($id)->delete();
    }

    public static function getById($courseId, $id)
    {
        return CoursesTopics::where('course_id', $courseId)->findOrFail($id);
    }
}

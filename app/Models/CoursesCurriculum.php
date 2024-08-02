<?php

namespace App\Models;

use App\Models\Courses;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CoursesCurriculum extends Model
{
    use HasFactory, HasUuids;
    protected $table = 'courses_curriculums';
    protected $guarded = ['id'];
    public $incrementing = false;

    public function course()
    {
        return $this->belongsTo(Courses::class, 'course_id', 'id');
    }

    public function scopeCourseId($value, $courseId)
    {
        return $value->where('course_id', $courseId);
    }
}

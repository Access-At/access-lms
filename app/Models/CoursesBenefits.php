<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CoursesBenefits extends Model
{
    use HasFactory, HasUuids;

    public $incrementings = false;

    protected $guarded = ['id'];

    protected $table = 'courses_benefits';

    public function course()
    {
        return $this->belongsTo(Courses::class, 'course_id', 'id');
    }

    public function scopeCourseId($value, $courseId)
    {
        return $value->where('course_id', $courseId);
    }
}

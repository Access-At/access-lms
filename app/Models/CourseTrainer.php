<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CourseTrainer extends Model
{
    use HasFactory, HasUuids;

    public $incrementing = false;

    public $timestamps = true;

    protected $guarded = [];

    protected $table = 'course_trainers';

    protected $casts = [
        'assign_date' => 'date',
    ];

    // create uuid
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id = (string) Str::uuid();
        });
    }
}

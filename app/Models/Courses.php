<?php

namespace App\Models;

use App\Models\Batch;
use App\Models\Administrator;
use App\Models\CoursesCurriculum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Courses extends Model
{
    use HasFactory, HasUuids, SoftDeletes;

    protected $guarded = ['id'];
    protected $table = 'courses';
    
    public $incrementing = false;

    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public function scopeRelation($value){
         $value->with(['curriculums', 'benefits', 'batches', 'category']);   
    }

    public function administrator(): BelongsTo{ 
        return $this->belongsTo(Administrator::class);
    }

    // batches
    public function batches() : HasMany
    {
        return $this->hasMany(Batch::class);
    }

    

    public function curriculums() : HasMany
    {
        return $this->hasMany(CoursesCurriculum::class, 'course_id', 'id');
    }
    public function benefits() : HasMany
    {
        return $this->hasMany(CoursesBenefits::class, 'course_id', 'id');
    }
    public function category() : BelongsTo
    {
        return $this->belongsTo(Category::class);
    }


}

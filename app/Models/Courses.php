<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Courses extends Model
{
    use HasFactory, HasUuids, SoftDeletes;

    public $incrementing = false;

    protected $guarded = ['id'];

    protected $table = 'courses';

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public static function boot()
    {
       parent::boot();
       
       static::creating(function($model)
       {
           $user = auth()->guard('admin')->user();
           $model->created_by = $user->id;
       });

       static::updating(function($model)
       {
           $user = auth()->guard('admin')->user();
        //    $model->updated_by = $user->id;
       });
    }


    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public function scopeRelation($value)
    {
        $value->with(['curriculums', 'benefits', 'batches', 'category']);
    }

    public function administrator(): BelongsTo
    {
        return $this->belongsTo(Administrator::class);
    }

    // batches
    public function batches(): HasMany
    {
        return $this->hasMany(Batch::class, 'id', 'batch_id');
    }

    public function curriculums(): HasMany
    {
        return $this->hasMany(CoursesCurriculum::class, 'course_id', 'id');
    }

    public function benefits(): HasMany
    {
        return $this->hasMany(CoursesBenefits::class, 'course_id', 'id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}

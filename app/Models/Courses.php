<?php

namespace App\Models;

use App\Models\Batch;
use App\Models\Administrator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    public function administrator(): BelongsTo{ 
        return $this->belongsTo(Administrator::class);
    }

    // batches
    public function batches() : HasMany
    {
        return $this->hasMany(Batch::class);
    }
}

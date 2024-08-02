<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory, HasUuids;

    public $incrementing = false;

    protected $guarded = ['id'];

    public function courses()
    {
        return $this->hasMany(Courses::class);
    }
}

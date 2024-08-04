<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Grade extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ['id'];

    protected $incrementing = false;

    protected $table = 'grades';
}

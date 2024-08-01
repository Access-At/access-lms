<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Batch extends Model
{
    use HasFactory, HasUuids, SoftDeletes;
    protected $guarded = [];

    protected $table = 'batches';
    public $incrementing = false;

    // softdelets
    protected $dates = ['deleted_at'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FeatureSection extends Model
{
    use HasFactory, HasUuids;

    public $incrementings = false;

    protected $guarded = ['id'];

    protected $table = 'feature_sections';
}

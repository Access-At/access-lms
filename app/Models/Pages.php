<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pages extends Model
{
    use HasFactory, HasUuids;

    public $incrementings = false;

    protected $guarded = ['id'];

    protected $table = 'pages';

    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public function getSlugAttribute()
    {
        return Str::slug($this->title);
    }
}

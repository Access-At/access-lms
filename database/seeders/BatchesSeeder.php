<?php

namespace Database\Seeders;

use App\Models\Batch;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class BatchesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Batch::create([
            'id' => Str::uuid(),
            'title' => 'Batch 1',
            'slug' => Str::slug('Batch 1'),
        ]);
    }
}

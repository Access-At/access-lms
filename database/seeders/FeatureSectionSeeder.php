<?php

namespace Database\Seeders;

use App\Models\FeatureSection;
use Illuminate\Database\Seeder;

class FeatureSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        FeatureSection::create([
            'title' => 'Pembelajaran Interaktif',
            'desc' => 'Menggunakan platform daring untuk diskusi langsung dan latihan interaktif antara instruktur dan siswa.',
        ]);
        FeatureSection::create([
            'title' => 'Kurikulum Berbasis Proyek',
            'desc' => 'Mendorong pembelajaran praktis dengan proyek nyata dalam pemrograman.',
        ]);
        FeatureSection::create([
            'title' => 'Fleksibilitas Waktu dan Akses',
            'desc' => 'Memungkinkan akses materi belajar kapan saja dan dari mana saja, baik online maupun offline.',
        ]);
    }
}

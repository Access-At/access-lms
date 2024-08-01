<?php

namespace Database\Seeders;

use App\Models\Administrator;
use App\Models\Trainer;
use App\Models\User;
use Illuminate\Database\Seeder;

class AdministratorSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Administrator::create([
            'email' => 'admin@gmail.com',
            'username' => 'Admin',
            'password' => bcrypt('admin'),
        ]);

        User::create([
            'email' => 'user@gmail.com',
            'username' => 'user',
            'password' => bcrypt('user'),
        ]);

        Trainer::create([
            'email' => 'trainer@gmail.com',
            'username' => 'trainer',
            'password' => bcrypt('trainer'),
        ]);
    }
}

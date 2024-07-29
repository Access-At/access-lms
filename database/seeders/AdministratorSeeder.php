<?php

namespace Database\Seeders;

use App\Models\Administrator;
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
            'password' => bcrypt('admin')
        ]);
    }
}

<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Ramsey\Uuid\Uuid;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $uuid = Uuid::uuid4();

        $user = User::create([
            'id' =>  $uuid->toString(),
            'nim' => 'kesekre001',
            'name' => 'Kesekre Build IT',
            'email' => 'kesekre@gmail.com',
            'line_id' => '-',
            'whatsapp_id' => '-',
            'password' => "kesekreBuild2025"
        ]);
        $user->assignRole('admin');

        $user = User::create([
            'id' =>  $uuid->toString(),
            'nim' => 'ilmiah001',
            'name' => 'Ilimiah Build IT',
            'email' => 'ilmiah@gmail.com',
            'line_id' => '-',
            'whatsapp_id' => '-',
            'password' => "ilmiahBuild2025"
        ]);
        $user->assignRole('admin');

        // $user = User::create([
        //     'id' =>  $uuid->toString(),
        //     'nim' => '2305551001',
        //     'name' => 'Dwiki Nusanjaya',
        //     'email' => 'peserta@gmail.com',
        //     'line_id' => '-',
        //     'whatsapp_id' => '-',
        //     'password' => "akunpesertabuild2024",
        //     'kelompok' => '4',
        //     'status' => 'Terverifikasi'
        // ]);

        // $user->assignRole('participant');
    }
}

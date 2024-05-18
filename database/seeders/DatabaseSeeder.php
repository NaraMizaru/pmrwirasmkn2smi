<?php

namespace Database\Seeders;

use App\Models\Bidang;
use App\Models\Kelas;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
            'fullname' => 'admin',
            'username' => 'admin',
            'password' => bcrypt('admin'),
            'email' => 'admin@admin.com',
            'no_telp' => '123',
            'role' => 'admin',
        ]);

        $kelas = [
            '10 AKL 1',
            '10 AKL 2',
            '10 AKL 3',
            '10 MPLB 1',
            '10 MPLB 2',
            '10 PM 1',
            '10 PM 2',
            '10 PM 3',
            '10 PM 4',
            '10 PPLG 1',
            '10 PPLG 2',
            '10 TJKT 1',
            '10 TJKT 2',
        ];

        foreach ($kelas as $item) {
            Kelas::create([
                'name' => $item
            ]);
        }

        
        $bidang = [
            'Pertolongan Pertama',
            'Tandu',
            'Karikatur',
            'PRS Konselor',
            'PRS Kabaret'
        ];
        
        foreach ($bidang as $item) {
            Bidang::create([
                'name' => $item
            ]);
        }

        $unit = [
            'Unit 1 | Kesehatan',
            'Unit 2 | Bakti Masyarakat',
            'Unit 3 | Persahabatan',
            'Unit 4 | Media Informasi',
        ];

        foreach ($unit as $item) {
            Unit::create([
                'name' => $item
            ]);
        }
    }
}

<?php

namespace Database\Seeders;

use App\Models\Pengaturan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PengaturanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pengaturan::create([
            'nama_perusahaan' => 'UD CAP BATERAY Brin Bran',
            'alamat_perusahaan' => 'Desa Agungmulyo, Kec. Juwana, Kabupaten Pati, Jawa Tengah',
            'telp_perusahaan' => '082220772852',
            'kode_pos' => '59185',
            'email_perusahaan' => '',
            'map_url' => 'https://maps.app.goo.gl/3v6KyQgBLbWRj6vp7',
            'image_kop' => '',
        ]);
    }
}

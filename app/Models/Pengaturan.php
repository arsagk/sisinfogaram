<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengaturan extends Model
{
    use HasFactory;

    protected $fillable = [
    'nama_perusahaan',
    'alamat_perusahaan',
    'telp_perusahaan',
    'email_perusahaan',
    'kode_pos',
    'map_url',
    'image_kop',
    ];

}

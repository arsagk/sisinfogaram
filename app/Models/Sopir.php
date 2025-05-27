<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sopir extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'nama_sopir',
    'no_telp',
    'alamat_sopir',
    'kode_sopir'];

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('nama_sopir', 'like', '%' . $search . '%');
                $query->orWhere('kode_sopir', 'like', '%' . $search . '%');
                $query->orWhere('alamat_sopir', 'like', '%' . $search . '%');
            });
        });
        // ->when($filters['tipe_client'] ?? null, function ($query, $tipe_client) {
        //     $query->where('tipe_client', $tipe_client);
        // });

    }
    public static function getYear()
    {
        $now = Carbon::now();
        $year = $now->year;
        // $rec = Jurnalumum::select('id')->whereDate('created_at', '=', $now->toDateString())->orderBy('id', 'desc')
        //     ->skip(0)->take(1)->first();
        // return substr($year, 2) . str_pad($month, 2, '0', STR_PAD_LEFT) . str_pad($date, 2, '0', STR_PAD_LEFT) . str_pad($rec ? (int) substr($rec->id, 6) + 1 : 1, 4, '0', STR_PAD_LEFT);
        return $year;
    }


    public static function getKodeSopir()
    {
        $now = Carbon::now();
        $year = $now->year;
        $month = $now->month;
        // $date = $now->day;
        // 'SUP2402001'
        $rec = Sopir::select('kode_sopir')->whereMonth('created_at', '=', $month)->orderBy('id', 'desc')
            ->skip(0)->take(1)->first();
        return substr($year, 2) . str_pad($month, 2, '0', STR_PAD_LEFT) . str_pad($rec ? (int) substr($rec->kode_sopir, 7) + 1 : 1, 3, '0', STR_PAD_LEFT);
    }

    public static function boot()
    {
        parent::boot();
        self::creating(function (Sopir $client) {
            $prefix = 'S-';
            $client->kode_sopir = $prefix . Sopir::getKodeSopir();
        });
        self::updating(function (Sopir $client) {
            $prefix = 'S-';
            $client->kode_sopir = $prefix . substr($client->kode_sopir,3);
        });
    }

}

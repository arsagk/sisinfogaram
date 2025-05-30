<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Biayaperm extends Model
{
    use HasFactory;
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id',
        'transpermohonan_id',
        'user_id',
        'jumlah_biayaperm',
        'jumlah_bayar',
        'kurang_bayar',
        'catatan_biayaperm',
        'image_biayaperm'
    ];
    public static function getPrimaryId()
    {
        $now = Carbon::now();
        $year = $now->year;
        $month = $now->month;
        $date = $now->day;
        $rec = Biayaperm::select('id')->whereDate('created_at', '=', $now->toDateString())->orderBy('id', 'desc')
            ->skip(0)->take(1)->first();
        return substr($year, 2) . str_pad($month, 2, '0', STR_PAD_LEFT) . str_pad($date, 2, '0', STR_PAD_LEFT) . str_pad($rec ? (int) substr($rec->id, 6) + 1 : 1, 4, '0', STR_PAD_LEFT);
    }


    public static function boot()
    {
        parent::boot();
        self::creating(function (Biayaperm $biayaperm) {
            $user = auth()->user();
            $biayaperm->id = Biayaperm::getPrimaryId();
            $biayaperm->user_id = $user->id;
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function transpermohonan()
    {
        return $this->belongsTo(Transpermohonan::class);
    }
}

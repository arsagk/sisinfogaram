<?php

namespace App\Http\Controllers\Staf;

use App\Http\Controllers\Controller;
use App\Models\Pengaturan;
use App\Models\Penjualan;
use App\Models\Prosespermohonan;
use App\Models\Transpermohonan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StafController extends Controller
{
    // private function random_rgb_color()
    // {
    //     $r = rand(0, 255);
    //     $g = rand(0, 255);
    //     $b = rand(0, 255);
    //     return "rgb($r, $g, $b)";
    // }
    private function random_hex_color()
    {
        $r = rand(0, 255);
        $g = rand(0, 255);
        $b = rand(0, 255);
        return sprintf('#%02x%02x%02x', $r, $g, $b);
    }
    public function index()
    {
        // $query = Transpermohonan::selectRaw('jenispermohonans.nama_jenispermohonan, count(jenispermohonan_id) as jumlah')
        //     ->join('jenispermohonans', 'transpermohonans.jenispermohonan_id', 'jenispermohonans.id')
        //     ->groupBy('jenispermohonan_id')
        //     ->get();
        // $collection = collect($query);
        // $data = [];
        // if (count($query) > 0) {
        //     $total = $collection->reduce(function ($carry, $item) {
        //         return $carry + $item['jumlah'];
        //     }, 0);
        //     $procentages = $collection->map(function ($item) use ($total) {
        //         $perc = $item['jumlah'] / $total * 100;
        //         $item['percentage'] = $perc;
        //         $item['bg_color'] = trim($this->random_hex_color());
        //         return $item;
        //     });
        //     $data = $procentages;
        // }
        // nama_jenispermohonan, jumlah, percentage, bg_color
        $query = Penjualan::selectRaw('barangs.nama_barang, sum(jumlah_penjualan) as jumlah')
            ->join('barangs', 'penjualans.barang_id', 'barangs.id')
            ->groupBy('nama_barang')
            ->get();
        $collection = collect($query);
        $data = [];
        if (count($query) > 0) {
            $total = $collection->reduce(function ($carry, $item) {
                return $carry + $item['jumlah'];
            }, 0);
            $procentages = $collection->map(function ($item) use ($total) {
                $perc = round($item['jumlah'] / $total * 100);
                $item['percentage'] = $perc;
                $item['bg_color'] = trim($this->random_hex_color());
                return $item;
            });
            $data = $procentages;
        }

        // $traffics =[
        //     ['nama_jenispermohonan'=>'Jual Beli', 'jumlah'=>210, 'percentage'=>'20', 'bg_color'=>trim($this->random_hex_color())],
        //     ['nama_jenispermohonan'=>'Hibah', 'jumlah'=>100, 'percentage'=>'10', 'bg_color'=>trim($this->random_hex_color())],
        //     ['nama_jenispermohonan'=>'PHB', 'jumlah'=>150, 'percentage'=>'15', 'bg_color'=>trim($this->random_hex_color())],
        //     ['nama_jenispermohonan'=>'Waris', 'jumlah'=>200, 'percentage'=>'20', 'bg_color'=>trim($this->random_hex_color())],
        //     ['nama_jenispermohonan'=>'Umum', 'jumlah'=>50, 'percentage'=>'5', 'bg_color'=>trim($this->random_hex_color())],
        //     ['nama_jenispermohonan'=>'Pemecahan', 'jumlah'=>300, 'percentage'=>'30', 'bg_color'=>trim($this->random_hex_color())],
        // ];


        $pengaturan = Pengaturan::get()->first();
        return Inertia::render('StafDashboard', ['traffics' => $data,'pengaturan'=>$pengaturan, 'recentActivities' => []]);
    }
}

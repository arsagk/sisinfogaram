<?php

namespace App\Http\Controllers\Staf;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\Pengaturan;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarangStafController extends Controller
{
    public function lapBarang()
    {

        // $barang->tanggal = Carbon::parse($barang->created_at)->format('d M Y');
        // $barang->user = $barang->user;
        // $barang->instansi = $barang->instansi;
        $media = request('media', 'screen');
        $tanggal = Carbon::now()->format('d M Y');
        // $pre = Barang::query();
        $barangs = Barang::simplePaginate(10)->withQueryString();

            // ->where('barangmasuk_id', $barangmasuk->id)
            // ->orderBy('barangmasuks.id', 'asc')
            // ->take(100)->skip(0)->get();
            // $barangmasuks = collect($barangmasuks)->map(function($rec){
            //     return $this->toArray($rec);
            // });
            $pengaturan = Pengaturan::get()->first();
            $pengaturan->image_kop = 'storage/'.$pengaturan->image_kop;
        $data = [
            'judul_lap' => 'DATA BARANG',
            'pengaturan' => $pengaturan,
            'barangs' => $barangs,
            'tanggal' => $tanggal,
            'media' => $media,
        ];
        if ($media == 'print') {
        $pdf = Pdf::loadView('pdf.lapBarang', $data)->setPaper(array(0, 0, 609.4488, 935.433), 'portrait');
        // return view('pdf.lapKeluarbiayauser', compact('judul_lap', 'subjudul_lap'));
        // return $pdf->stream('lapKeluarbiayauser.pdf');
        return 'data:application/pdf;base64,' . base64_encode($pdf->stream());
        }
        return Inertia::render(
            'Staf/Informasi/LapBarang',
            [
                'media' => $media,
                'barangs' => $barangs,
            ]
        );

    }

}

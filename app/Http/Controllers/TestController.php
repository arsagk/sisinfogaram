<?php

namespace App\Http\Controllers;

use App\Models\Akun;
use App\Models\Itemkegiatan;
use App\Models\Kelompokakun;
use App\Models\Prosespermohonan;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dt1 = Carbon::now();
        $dt2 = Carbon::now();
        $dt3 = Carbon::now()->subDays(7);
        $dt4 = Carbon::now();
        $dt5 = Carbon::now()->setDay(1);
        $dt6 = Carbon::now();
        $periods = [
            'today' => [$dt1->setTime(0, 0, 1)->format('Y-m-d H:i:s'), $dt2->setTime(24, 0, 0)->format('Y-m-d H:i:s')],
            'this_week' => [$dt3->setTime(0, 0, 1)->format('Y-m-d H:i:s'), $dt4->setTime(24, 0, 0)->format('Y-m-d H:i:s')],
            'this_month' => [$dt5->setTime(0, 0, 1)->format('Y-m-d H:i:s'), $dt6->setTime(24, 0, 0)->format('Y-m-d H:i:s')],
        ];

        // return response()->json($periods);

        // $tgl_lap = Carbon::today()->format('d F Y');
        // $data = [
        //     'judul_lap' => 'PENGELUARAN BIAYA BPN',
        //     'subjudul_lap' => 'Tanggal : ' . $tgl_lap,
        // ];

        // $pdf = Pdf::loadView('pdf.lapKeluarbiayauser', $data)->setPaper(array(0, 0, 609.4488, 935.433), 'portrait');
        // // return view('pdf.lapKeluarbiayauser', compact('judul_lap', 'subjudul_lap'));
        // return $pdf->stream();
        return Inertia::render('Test/Test', []);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

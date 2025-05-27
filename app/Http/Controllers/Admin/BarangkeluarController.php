<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\BarangkeluarCollection;
use App\Models\Barangkeluar;
use App\Models\Pengaturan;
use App\Models\Penjualan;
use App\Models\Sopir;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class BarangkeluarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    private $base_route = null;
    private $is_admin = null;
    private $user = null;
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->base_route = 'staf.transaksi.';
            $user = request()->user();
            $this->user = $user;
            $role = $user->hasRole('admin');
            $this->is_admin = false;
            if ($role == 'admin') {
                $this->is_admin = true;
                $this->base_route = 'admin.transaksi.';
            }
            return $next($request);
        });
    }

    public function index()
    {

        $barangkeluars = Barangkeluar::query();
        $barangkeluars = $barangkeluars->with(['penjualan','penjualan.client','penjualan.barang']);

        if (request()->has(['sortBy', 'sortDir'])) {
            $barangkeluars = $barangkeluars->orderBy(request('sortBy'), request('sortDir'));
        }
        $barangkeluars = $barangkeluars->filter(Request::only('search', 'satuan'))
            ->paginate(10)
            ->appends(Request::all());


        return Inertia::render('Admin/Barangkeluar/Index', [
            'filters' => Request::all('search', 'kode_barangkeluar'),
            'barangkeluars' => BarangkeluarCollection::collection($barangkeluars),
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $penjualans = Penjualan::with(['client','barang'])->where('used', false)->get();
        $sopirs = Sopir::all();

        return Inertia::render('Admin/Barangkeluar/Create', [
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
            'penjualanOpts' => collect($penjualans)->map(fn ($o, $i) => ['label' => $o->kode_penjualan.' - '.$o->client->nama_client, 'value' => $o->id,'penjualan'=>$o])->toArray(),
            'penjualanOpt' =>count($penjualans)>0?['value'=>$penjualans[0]->kode_penjualan, 'label'=>$penjualans[0]->kode_penjualan]:[],
            'sopirOpts' => collect($sopirs)->map(fn ($o, $i) => ['label' => $o->nama_sopir.' - '.$o->alamat_sopir, 'value' => $o->id])->toArray(),
            'sopirOpt' =>count($sopirs)>0?['value'=>$sopirs[0]->id, 'label'=>$sopirs[0]->nama_sopir.' - '.$sopirs[0]->alamat_sopir]:[],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $val_itemkgt = ['required'];
        // $itemkegiatan = Barang::find(request('barang_id'));
        // $isunique = $itemkegiatan ? $itemkegiatan->isunique : false;
        // if ($isunique) {
        //     $val_itemkgt =  ['required', Rule::unique('keluarbiayaperms', 'itemkegiatan_id')->where('transpermohonan_id', request('transpermohonan_id'))];
        // }
        $messages = [
            'required' => ':attribute wajib diisi.',
            'jumlah_keluar.lte' => 'Jumlah Keluar melebihi jumlah penjualan',
        ];
        $validated =  request()->validate([
            'penjualan_id' => ['required'],
            'no_daftar' => ['nullable'],
            'jumlah_penjualan' => ['required','numeric'],
            'jumlah_muatan' => ['required','numeric'],
            'jumlah_keluar' => ['required','numeric','lte:jumlah_penjualan'],
            'no_pol' => ['required'],
            'sopir_id' => ['required'],
        ], $messages);

        $barangkeluar = Barangkeluar::create($validated);
        $barang = $barangkeluar->penjualan->barang;
        $barangkeluar->penjualan->update(['used'=>true]);
        $stok_awal = $barang->stok_barang;
        $barang->update(['stok_barang'=>$stok_awal - $validated['jumlah_keluar']]);
        return to_route($this->base_route . 'barangkeluars.index')->with('success', 'Barangkeluar created.');
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
    public function edit(Barangkeluar $barangkeluar)
    {
        $penjualans = Penjualan::with(['client','barang'])->where('used', true)->get();
        $sopirs = Sopir::all();

        $penjualan = $barangkeluar->penjualan;
        $penjualan->client = $barangkeluar->penjualan->client;
        $penjualan->barang = $barangkeluar->penjualan->barang;
        $sopir = $barangkeluar->sopir;
        return Inertia::render('Admin/Barangkeluar/Edit', [
            'barangkeluar' => $barangkeluar,
            'penjualanOpts' => collect($penjualans)->map(fn ($o, $i) => ['label' => $o->kode_penjualan.' - '.$o->client->nama_client, 'value' => $o->id,'penjualan'=>$o])->toArray(),
            'penjualanOpt' =>$penjualan?['value'=>$penjualan->id, 'label'=>$penjualan->kode_penjualan.' - '.$penjualan->client->nama_client,'penjualan'=>$penjualan]:[],
            'sopirOpts' => collect($sopirs)->map(fn ($o, $i) => ['label' => $o->nama_sopir.' - '.$o->alamat_sopir, 'value' => $o->id])->toArray(),
            'sopirOpt' =>$sopir?['value'=>$sopir->id, 'label'=>$sopir->nama_sopir.' - '.$sopir->alamat_sopir]:[],
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Barangkeluar $barangkeluar)
    {
        $validated =  request()->validate([
            'penjualan_id' => ['required'],
            'no_daftar' => ['nullable'],
            'jumlah_muatan' => ['required','numeric'],
            'jumlah_keluar' => ['required','numeric'],
            'no_pol' => ['required'],
            'sopir_id' => ['required'],
         ]);
        $barangkeluar->update(
            $validated
        );

        return Redirect::route($this->base_route . 'barangkeluars.index')->with('success', 'Barangkeluar updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barangkeluar $Barangkeluar)
    {
        $Barangkeluar->delete();
        return Redirect::back()->with('success', 'Barangkeluar deleted.');
    }
    private function toArray($rec): array
    {
        $nohak = $rec->singkatan == 'C' ? $rec->nomor_hak . ', Ps.' . $rec->persil . ', ' . $rec->klas : $rec->nomor_hak;
        return [
            'id' => $rec->id,
            'permohonan' => sprintf(
                '%s,%s.%s, L.%sM2, Ds.%s - %s',
                $rec->nama_penerima,
                $rec->singkatan,
                $nohak,
                $rec->luas_tanah,
                $rec->nama_desa,
                $rec->nama_kecamatan,
            ),
            'nama_itemkegiatan' => $rec->nama_itemkegiatan,
            'jumlah_biaya' => number_format($rec->jumlah_biaya),
            'ket_biaya' => $rec->ket_biaya,
        ];
    }

    public function lapSuratjalan(Barangkeluar $barangkeluar)
    {

        $barangkeluar->tanggal = Carbon::parse($barangkeluar->created_at)->format('d M Y');
        // $barangkeluar->user = $barangkeluar->user;
        // $barangkeluar->instansi = $barangkeluar->instansi;
        $tanggal = Carbon::now()->format('d M Y');
        // $barangkeluars = Barangkeluar::query();
        $barangkeluar = $barangkeluar;
            // ->where('barangkeluar_id', $barangkeluar->id)
            // ->orderBy('barangkeluars.id', 'asc')
            // ->take(100)->skip(0)->get();
            // $barangkeluars = collect($barangkeluars)->map(function($rec){
            //     return $this->toArray($rec);
            // });
            $pengaturan = Pengaturan::get()->first();
            $pengaturan->image_kop = 'storage/'.$pengaturan->image_kop;
        $data = [
            'judul_lap' => 'SURAT JALAN',
            'pengaturan' => $pengaturan,
            'suratjalan' => $barangkeluar,
            'tanggal' => $tanggal,
        ];
        $pdf = Pdf::loadView('pdf.lapSuratjalan', $data)->setPaper(array(0, 0, 609.4488, 935.433), 'portrait');
        // return view('pdf.lapKeluarbiayauser', compact('judul_lap', 'subjudul_lap'));
        // return $pdf->stream('lapKeluarbiayauser.pdf');
        return 'data:application/pdf;base64,' . base64_encode($pdf->stream());
    }

}

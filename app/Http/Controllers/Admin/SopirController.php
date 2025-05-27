<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\SopirCollection;
use App\Http\Resources\Admin\PermohonanCollection;
use App\Models\Sopir;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class SopirController extends Controller
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
            $this->base_route = 'staf.';
            $user = request()->user();
            $this->user = $user;
            $role = $user->hasRole('admin');
            $this->is_admin = false;
            if ($role == 'admin') {
                $this->is_admin = true;
                $this->base_route = 'admin.';
            }
            return $next($request);
        });
    }

    public function index()
    {
        $tipe_sopirs = [
            ['value' => '', 'label' => 'All Sopir'],
            ['value' => 'Supplier', 'label' => 'Supplier'],
            ['value' => 'Pembeli', 'label' => 'Pembeli'],
        ];

        $sopirs = Sopir::query();
        if (request()->has(['sortBy', 'sortDir'])) {
            $sopirs = $sopirs->orderBy(request('sortBy'), request('sortDir'));
        }
        $sopirs = $sopirs->filter(Request::only('search', 'tipe_sopir'))
            ->paginate(10)
            ->appends(Request::all());

        $tipeclentOpt = collect($tipe_sopirs)->filter(function($item){
            return $item['value'] == request('tipe_sopir','');
        })->first();

        return Inertia::render('Admin/Sopir/Index', [
            'filters' => Request::all('search', 'kode_sopir'),
            'sopirs' => SopirCollection::collection($sopirs),
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
            'tipesopirOpts' =>$tipe_sopirs,
            'tipesopirOpt' =>$tipeclentOpt,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tipe_sopirs = [
            ['value' => 'Supplier', 'label' => 'Supplier'],
            ['value' => 'Pembeli', 'label' => 'Pembeli'],
        ];

        return Inertia::render('Admin/Sopir/Create', [
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated =  request()->validate([
            'nama_sopir' => ['required'],
            'alamat_sopir' => ['required'],
            'no_telp' => ['required'],
            'kode_sopir' => ['nullable'],
            'active' => ['boolean'],
        ]);
        Sopir::create($validated);
        return to_route($this->base_route . 'sopirs.index')->with('success', 'Sopir created.');
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
    public function edit(Sopir $sopir)
    {
        return Inertia::render('Admin/Sopir/Edit', [
            'sopir' => $sopir,
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Sopir $sopir)
    {
        $validated =  request()->validate([
            'nama_sopir' => ['required'],
            'alamat_sopir' => ['required'],
            'no_telp' => ['required'],
            'kode_sopir' => ['nullable'],
            'active' => ['boolean'],
        ]);
        $sopir->update(
            $validated
        );

        return Redirect::route($this->base_route . 'sopirs.index')->with('success', 'Sopir updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sopir $Sopir)
    {
        $Sopir->delete();
        return Redirect::back()->with('success', 'Sopir deleted.');
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pengaturan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PengaturanController extends Controller
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
        $pengaturan = Pengaturan::get()->first();
        return Inertia::render('Admin/Pengaturan/Edit', [
            'pengaturan' => $pengaturan?$pengaturan:null,
            'base_route' => $this->base_route,
        ]);

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
    private static function quickRandom($length = 16)
    {
        $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    }
    public function update(Pengaturan $pengaturan)
    {
        $validated =  request()->validate([
            'nama_perusahaan' => ['required'],
            'alamat_perusahaan' => ['required'],
            'telp_perusahaan' => ['nullable'],
            'email_perusahaan' => ['nullable'],
            'kode_pos' => ['required'],
            'map_url' => ['required'],
            'image_kop' => ['nullable', 'image', 'mimes:png,jpg,jpeg,gif', 'max:2048']
        ]);
        if (request()->hasFile('image_kop')) {
            $file = request()->file('image_kop');
            $name = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $random = $this->quickRandom(8);
            $new_filename = sprintf('%s_%s.%s', substr($name, 0, strpos($name, '.' . $extension)), $random, $extension);
            $file_path = $file->storeAs('images/app', $new_filename, 'public');
            $validated['image_kop'] = $file_path;
        }

        $pengaturan->update(
            $validated
        );
        return Redirect::back()->with('success', 'Pengaturan telah diupdate.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

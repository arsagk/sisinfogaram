<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\BarangController;
use App\Http\Controllers\Admin\BarangkeluarController;
use App\Http\Controllers\Admin\BarangmasukController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\PembelianController;
use App\Http\Controllers\Admin\PengaturanController;
use App\Http\Controllers\Admin\PenjualanController;
use App\Http\Controllers\Admin\SopirController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\Staf\BarangkeluarStafController;
use App\Http\Controllers\Staf\BarangmasukStafController;
use App\Http\Controllers\Staf\BarangStafController;
use App\Http\Controllers\Staf\PembelianStafController;
use App\Http\Controllers\Staf\PenjualanStafController;
use App\Http\Controllers\Staf\StafController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\User\UserMainController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (request()->user()) {
        return redirect()->intended(request()->user()->getRedirectRoute());
    }
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/test', [TestController::class, 'index'])->name('test.index');
});
// Users
Route::middleware(['auth', 'role:admin|staf'])->prefix('/admin')->name('admin.')->group(function () {
});

Route::middleware(['auth', 'role:staf'])->prefix('/staf')->name('staf.')->group(function () {
    Route::get('/', [StafController::class, 'index'])->name('index');
});
Route::middleware(['auth', 'role:user'])->prefix('/user')->name('user.')->group(function () {
    Route::get('/', [UserMainController::class, 'index'])->name('index');
});

Route::middleware(['auth', 'role:admin'])->prefix('/admin')->name('admin.')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('index');
    Route::resource('/users', UserController::class);
    Route::resource('/permissions', PermissionController::class);
    Route::resource('/roles', RoleController::class);
    Route::resource('/clients', ClientController::class);
    Route::resource('/barangs', BarangController::class);
    Route::resource('/sopirs', SopirController::class);
    Route::get('/pengaturans', [PengaturanController::class, 'index'])->name('pengaturans.index');
    Route::put('/pengaturans/{pengaturan}', [PengaturanController::class, 'update'])->name('pengaturans.update');

    // Route::get('/users/extra/pesan/{user}', [UserController::class, 'pesan'])->name('user.extra.pesan');


});
Route::middleware(['auth', 'role:admin|staf'])->prefix('/transaksi')->name('transaksi.')->group(function () {
    // Route::get('/prosespermohonans/api/listbypermohonanid', [ProsespermohonanController::class, 'listByPermohonanId'])->name('prosespermohonans.api.listbypermohonanid');
    // Route::get('/transpermohonans/api/list', [TransPermohonanController::class, 'List'])->name('transpermohonans.api.list');
    // Route::get('/biayaperms/create', [BiayapermController::class, 'create'])->name('biayaperms.create');
    // Route::post('/biayaperms/store', [BiayapermController::class, 'store'])->name('biayaperms.store');
    // Route::put('/biayaperms/update/{biayaperm}', [BiayapermController::class, 'update'])->name('biayaperms.update');
    // Route::delete('/biayaperms/{biayaperm}/destroy', [BiayapermController::class, 'destroy'])->name('biayaperms.destroy');
    // Route::resource('/bayarbiayaperms', BayarbiayapermController::class);
    // Route::resource('/jurnalumums', JurnalumumController::class);
    // Route::resource('/keluarbiayaperms', KeluarbiayapermController::class);
    // Route::resource('/kasbons', KasbonController::class);
    // Route::get('/bayarbiayaperms/api/list', [BayarbiayapermController::class, 'list'])->name('bayarbiayaperms.api.list');
    // Route::get('/keluarbiayaperms/api/list', [KeluarbiayapermController::class, 'list'])->name('keluarbiayaperms.api.list');
    // Route::get('/keluarbiayaperms/api/totalpengeluaran', [KeluarbiayapermController::class, 'getTotalPengeluaran'])->name('keluarbiayaperms.api.totalpengeluaran');
    // Route::get('/jurnalumums/api/neracapermohonan', [JurnalumumController::class, 'NeracaPermohonan'])->name('jurnalumums.api.neracapermohonan');
    // Route::get('/dkeluarbiayapermusers/api/list', [KeluarbiayapermuserStafController::class, 'list'])->name('dkeluarbiayapermusers.api.list');
    // Route::get('/dkeluarbiayapermusers/api/totalpengeluaran', [KeluarbiayapermuserStafController::class, 'getTotalPengeluaran'])->name('dkeluarbiayapermusers.api.totalpengeluaran');
    // Route::delete('/dkeluarbiayapermusers/{dkeluarbiayapermuser}/destroy', [KeluarbiayapermuserStafController::class, 'destroyDkeluarbiayapermuser'])->name('dkeluarbiayapermusers.destroy');
    // Route::get('/keluarbiayapermusers/api/updatekasbon/{id}', [KeluarbiayapermuserStafController::class, 'updateKasbon'])->name('keluarbiayapermusers.api.updatekasbon');
});

Route::middleware(['auth', 'role:staf'])->prefix('/staf/transaksi')->name('staf.transaksi.')->group(function () {
    Route::resource('/pembelians', PembelianStafController::class);
    Route::resource('/barangmasuks', BarangmasukStafController::class);
    Route::resource('/penjualans', PenjualanStafController::class);
    Route::resource('/barangkeluars', BarangkeluarStafController::class);
    Route::get('/barangkeluars/laporan/suratjalan/{barangkeluar}', [BarangkeluarStafController::class,'lapSuratjalan'])->name('barangkeluars.laporan.suratjalan');
    Route::get('/barangmasuks/laporan/pembelian/{barangmasuk}', [BarangmasukStafController::class,'lapPembelian'])->name('barangmasuks.laporan.pembelian');

});
Route::middleware(['auth', 'role:admin'])->prefix('/admin/transaksi')->name('admin.transaksi.')->group(function () {
    Route::resource('/pembelians', PembelianController::class);
    Route::resource('/barangmasuks', BarangmasukController::class);
    Route::resource('/penjualans', PenjualanController::class);
    Route::resource('/barangkeluars', BarangkeluarController::class);
    Route::get('/barangkeluars/laporan/suratjalan/{barangkeluar}', [BarangkeluarController::class,'lapSuratjalan'])->name('barangkeluars.laporan.suratjalan');
    Route::get('/barangmasuks/laporan/pembelian/{barangmasuk}', [BarangmasukController::class,'lapPembelian'])->name('barangmasuks.laporan.pembelian');
});

Route::middleware(['auth', 'role:admin'])->prefix('/admin/informasi')->name('admin.informasi.')->group(function () {
    // Route::get('/prosespermohonans', [ProsespermohonanController::class, 'index'])->name('prosespermohonans.index');
    // Route::get('/prosespermohonans/bypermohonan', [ProsespermohonanController::class, 'byPermohonan'])->name('prosespermohonans.bypermohonan');
    // Route::get('/transpermohonans/api/list', [TransPermohonanController::class, 'List'])->name('transpermohonans.api.list');
    Route::get('/barangs', [BarangController::class, 'lapBarang'])->name('barangs');
    // Route::get('/keuangans/neraca', [LapKeuanganAdminController::class, 'neraca'])->name('keuangans.neraca');
});
Route::middleware(['auth', 'role:staf'])->prefix('/staf/informasi')->name('staf.informasi.')->group(function () {
    Route::get('/barangs', [BarangStafController::class, 'lapBarang'])->name('barangs');
//     Route::get('/prosespermohonans', [ProsespermohonanStafController::class, 'index'])->name('prosespermohonans.index');
//     Route::get('/prosespermohonans/bypermohonan', [ProsespermohonanStafController::class, 'byPermohonan'])->name('prosespermohonans.bypermohonan');
//     Route::get('/transpermohonans/api/list', [TransPermohonanController::class, 'List'])->name('transpermohonans.api.list');
});

require __DIR__ . '/auth.php';

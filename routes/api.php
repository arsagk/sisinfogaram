<?php

use App\Http\Controllers\Api\Admin\KasbonApiController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FirebaseApiController;
use App\Http\Controllers\Api\UserApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// signup and login
Route::post('/signup', [AuthController::class, 'sign_up']);
Route::post('/login', [AuthController::class, 'login']);
// Route::get('/users',[UserApiController::class, 'index'])->name('users.index');

Route::group(['middleware' => ['auth:sanctum']], function () {
    // logout
Route::get('/user', function (Request $request) {
        return $request->user();
Route::post('/logout', function(Request $request){
    $request->user()->currentAccessToken()->delete();
    return response()->noContent();
});
});

Route::post('/logout', [AuthController::class, 'logout']);
Route::patch('/update_fcmtoken', [FirebaseApiController::class, 'updateFcmtoken'])->name('update.fcmtoken');
Route::post('/send_message', [FirebaseApiController::class, 'sendMessage'])->name('send.message');
Route::get('/users',[UserApiController::class, 'index'])->name('users.index');
Route::get('/test', function (Request $request) {
    return response()->json(['data'=>"data"]);
});
Route::get('/kasbons',[KasbonApiController::class, 'index'])->name('kasbons.index');
Route::get('/kasbons/status_kasbons/{kasbon}',[KasbonApiController::class, 'statusKasbons'])->name('kasbons.status_kasbons');
Route::patch('/kasbons/update_status/{kasbon}', [KasbonApiController::class, 'updateStatus'])->name('kasbons.update_status');
Route::get('/kasbons/test',[KasbonApiController::class, 'test'])->name('kasbons.test');

});


<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('pembelians', function (Blueprint $table) {
            $table->boolean('with_spk')->default(false);
            $table->string('no_spk')->nullable();
            $table->date('tgl_spk')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pembelians', function (Blueprint $table) {
            $table->dropColumn('with_spk');
            $table->dropColumn('no_spk');
            $table->dropColumn('tgl_spk');
        });
    }
};

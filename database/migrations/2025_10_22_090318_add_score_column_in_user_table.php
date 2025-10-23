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
        Schema::table('users', function (Blueprint $table) {
            $table->integer('nilai_alprog')->nullable();
            $table->integer('nilai_jarkom')->nullable();
            $table->integer('nilai_basdat')->nullable();
            $table->integer('nilai_gemastik')->nullable();
            $table->float('nilai_tugas')->nullable();
            $table->integer('nilai_kehadiran')->nullable();
            $table->float('nilai_akhir')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('nilai_alprog');
            $table->dropColumn('nilai_jarkom');
            $table->dropColumn('nilai_basdat');
            $table->dropColumn('nilai_gemastik');
            $table->dropColumn('nilai_tugas');
            $table->dropColumn('nilai_kehadiran');
            $table->dropColumn('nilai_akhir');
        });
    }
};

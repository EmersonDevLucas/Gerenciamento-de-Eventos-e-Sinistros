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
        Schema::create('events', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nameAssociate');
            $table->string('tableAssociate');
            $table->string('typeEvent');
            $table->date('dateEvent');
            $table->string('progressEvent');
            $table->string('emailAssociate');
            $table->string('telephoneAssociate');
            $table->string('Third');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_events');
    }
};

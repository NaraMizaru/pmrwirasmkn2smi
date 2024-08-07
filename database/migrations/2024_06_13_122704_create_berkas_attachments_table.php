<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('berkas_attachments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('berkas_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->string('name');
            $table->enum('type', ['file', 'link']);
            $table->string('data_path');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('berkas_attachments');
    }
};

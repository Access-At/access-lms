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
        Schema::create('courses', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('slug');
            $table->string('short_desc')->nullable();
            $table->longText('full_desc')->nullable();
            $table->string('imageUrl')->nullable();
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('level', ['mudah', 'menengah', 'profesional'])->default('mudah');
            $table->enum('status', ['draft', 'publish'])->default('draft');
            $table->integer('price')->default(0);
            $table->boolean('isPaid')->default(true)->comment('Jika 0 = free, 1 = paid');
            $table->foreignUuid('batch_id')->constrained('batches')->cascadeOnDelete();
            $table->foreignUuid('created_by')->constrained('administrators')->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};

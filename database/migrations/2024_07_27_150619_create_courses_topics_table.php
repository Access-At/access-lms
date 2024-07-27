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
        Schema::create('courses_topics', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->integer('order')->default(1);
            $table->longText('content');
            $table->foreignUuid('course_id')->constrained('courses')->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses_topics');
    }
};

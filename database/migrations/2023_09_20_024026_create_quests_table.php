<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('quests', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\User::class, 'creator_id');
            $table->string('title',255);
            $table->longText('description')->nullable();
            $table->string('banner_img',255);
            $table->text('requisites',255);
            $table->timestamp('date')->nullable();
            $table->string('location',255);
            $table->integer('max_users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quests');
    }
};

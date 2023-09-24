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
        Schema::create('quest_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Quest::class, 'quest_id');
            $table->foreignIdFor(\App\Models\Tag::class, 'tag_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quest_tags');
    }
};

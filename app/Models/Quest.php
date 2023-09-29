<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quest extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'banner_img',
        'requisites',
        'date',
        'location',
        'max_users',
        'status',
        'created_at',
        'updated_at',
        'creator_id'
    ];

}

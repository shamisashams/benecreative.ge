<?php

namespace App\Models\Translations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortfolioTranslation extends BaseTranslationModel
{
    use HasFactory;
    // protected $table = 'staffs';
    // protected $fillable = [
    //     'name',
    //     'position',
    // ];
    protected $fillable = [
        'name',
        'costumer',
        'durations',
        'about_project',
        'direction',
        'design',
        'animation',
        'music',
    ];
}

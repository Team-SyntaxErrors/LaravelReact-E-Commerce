<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;
class Unit extends Model
{
    protected $table = "units";
    protected $primaryKey = "unit_id";
    protected $fillable = ["unit_name", "short_name", "status", "created_by", "updated_by"];

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function scopeSearch($query, $search){
        return $query->where('unit_name', 'LIKE', '%' . $search . '%')
                    ->orwhere('short_name', 'like' ,'%'.$search. '%');
    }


    // public static function boot()
    // {
    //     parent::boot();

    //     static::saving(function ($model) {
    //         $model->created_by = Auth::user()->id;

    //     });

    //     static::updating(function ($model) {
    //         $model->updated_by = Auth::user()->id;

    //     });
    // }
}

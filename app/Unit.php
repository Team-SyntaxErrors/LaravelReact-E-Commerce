<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    /**
     * Table name
     *
     * @var string
     */
    protected $table = "units";

    /**
     * table primary key
     *
     * @var string
     */
    protected $primaryKey = "unit_id";

    /**
     * Table other fields name
     *
     * @var array
     */
    protected $fillable = ['unit_name', 'short_name', 'status', 'created_by', 'updated_by'];

    /**
     * Status function
     *
     * @param mixed $query Initial Query to add condition.
     * @return array
     */
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    /**
     * Search function
     *
     * @param mixed $query  Initial Query to add condition.
     * @param mixed $search Token for searching.
     * @return array
     */
    public function scopeSearch($query, $search)
    {
        return $query->where('unit_name', 'LIKE', '%' . $search . '%')
            ->orWhere('short_name', 'like', '%' . $search . '%');
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

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductTag extends Model
{
    /**
     * Table name
     *
     * @var string
     */
    protected $table = 'product_tags';

    /**
     * table primary key
     *
     * @var string
     */
    protected $primaryKey = 'image_id';

    /**
     * Table other fields name
     *
     * @var array
     */
    protected $fillable = [
        'product_id',
        'tags',
    ];
}

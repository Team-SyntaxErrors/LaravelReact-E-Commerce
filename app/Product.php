<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{
    /**
     * Table name
     *
     * @var string
     */
    protected $table = 'products';

    /**
     * table primary key
     *
     * @var string
     */
    protected $primaryKey = 'product_id';

    /**
     * Table other fields name
     *
     * @var array
     */
    protected $fillable = [
        'product_name',
        'product_slug',
        'product_sku',
        'category_id',
        'subcategory_id',
        'brand_id',
        'unit_id',
        'product_alert_qty',
        'purchase_price',
        'sell_price',
        'description',
        'product_has_tag',
        'status',
    ];

    /**
     * The relation between product and product image table
     *
     * @return object
     */
    public function images()
    {
        return $this->hasMany(ProductImage::class, 'product_id');
    }

    /**
     * The relation between product and tag table
     *
     * @return object
     */
    public function tags()
    {
        return $this->hasMany(ProductTag::class, 'product_id');
    }

    /**
     * The relation between product and category table
     *
     * @return object
     */
    public function categories()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * The relation between product and subCategory table
     *
     * @return object
     */
    public function subCategories()
    {
        return $this->belongsTo(SubCategory::class, 'subcategory_id');
    }

    /**
     * The relation between product and brand table
     *
     * @return object
     */
    public function brands()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    /**
     * The relation between product and unit table
     *
     * @return object
     */
    public function units()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }

    /**
     * Boot function
     * Overwriting for setting the auth user id in
     * created by while saving
     * updated by while updating
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->created_by = Auth::user()->id ?? null;
        });

        static::updating(function ($model) {
            $model->updated_by = Auth::user()->id ?? null;
        });
    }
}

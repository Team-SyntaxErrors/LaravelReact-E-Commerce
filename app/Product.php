<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'product_id';
    protected $fillable = [
        "product_name",
        "product_slug",
        "product_sku",
        "category_id",
        "subcategory_id",
        "brand_id",
        "unit_id",
        "product_alert_qty",
        "purchase_price",
        "sell_price",
        "description",
        "product_has_tag",
        "status",
    ];

    /** 
     * Relation between products table and product_images table
    */
    public function images()
    {
        return $this->hasMany(ProductImage::class, 'product_id');
    }

    /**
     * Relation between products table and product_tags table
     */
    public function tags()
    {
        return $this->hasMany(ProductTag::class, 'product_id');
    }

    /**
     * Relation between categories table and products table
     */
    public function categories()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * Relation between sub_categories table and products table
     */
    public function subCategories()
    {
        return $this->belongsTo(SubCategory::class, 'subcategory_id');
    }

    /**
     * Relation between sub_categories table and products table
     */
    public function brands()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    /**
     * Relation between units table and products table
     */
    public function units()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }
    
    /** 
     * Store created_by when new product inserted
     * 
     * Updated updated_by when product updated
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

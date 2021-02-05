<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
        'status',
    ];

    /**
     * Product search function
     *
     * @param  object $query Orm.
     * @param  mixed  $q     Searching data.
     * @return object
     */
    public function scopeSearch(object $query, $q): object
    {
        return $query->where('product_name', 'LIKE', '%' . $q . '%')
            ->orWhere('product_sku', 'LIKE', '%', $q . '%')
            ->orWhere('purchase_price', 'LIKE', '%', $q . '%')
            ->orWhere('sell_price', 'LIKE', '%', $q . '%');
    }

    /**
     * The relation between product and product image table
     *
     * @return object
     */
    // public function images()
    // {
    //     return $this->hasMany(ProductImage::class, 'product_id');
    // }

    /**
     * The relation between product and tag table
     *
     * @return HasMany
     */
    public function tags(): HasMany
    {
        return $this->hasMany(ProductTag::class, 'product_id');
    }

    /**
     * The relation between product and category table
     *
     * @return BelongsTo
     */
    public function categories(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * The relation between product and subCategory table
     *
     * @return BelongsTo
     */
    public function subCategories(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class, 'subcategory_id');
    }

    /**
     * The relation between product and brand table
     *
     * @return BelongsTo
     */
    public function brands(): BelongsTo
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    /**
     * The relation between product and unit table
     *
     * @return BelongsTo
     */
    public function units(): BelongsTo
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

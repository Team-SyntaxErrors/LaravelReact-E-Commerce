<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Menu;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Menu::class, function (Faker $faker) {
    $menu_name=$faker->name();
    return [
        'menu_name'=>$menu_name,
        'menu_slug'=>Str::slug($menu_name),
        'menu_icon'=>$faker->name(),
        'status'=>1
    ];
});

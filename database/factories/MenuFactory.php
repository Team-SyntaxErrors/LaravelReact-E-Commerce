<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Menu;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Menu::class, function (Faker $faker) {
    $image=['demo.jpeg','demo2.png','demo3.png'];
    $menu_name=$faker->name();
    return [
        'menu_name'=>$menu_name,
        'menu_slug'=>Str::slug($menu_name),
        'menu_icon'=>'backend_assets/images/'.$image[rand(0, 2)],
        'status'=>1
    ];
});

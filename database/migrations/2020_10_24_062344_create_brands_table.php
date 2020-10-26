<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBrandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brands', function (Blueprint $table) {
            $table->id("brand_id");
            $table->string("brand_name", 100);
            $table->string("contact_person", 100);
            $table->string("phone_number", 100);
            $table->text("brand_address")->nullable();
            $table->string("brand_logo", 1000)->nullable();
            $table->text("brand_description")->nullable();
            $table->boolean("status")->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brands');
    }
}

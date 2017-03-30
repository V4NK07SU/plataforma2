<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHealthDimensionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('health_dimension', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title',128);
            $table->text('description');
            
             $table->integer('category_id')->unsigned();
             $table->foreign('category_id')->references('id')->on('health_dimension_categories')->onDelete('cascade');


            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('health_dimension');
    }
}

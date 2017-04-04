<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHealthTypeDimensionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('health_type_dimension', function (Blueprint $table) {
          
            $table->integer('type_id')->unsigned();
            $table->foreign('type_id')->references('id')->on('health_types')->onDelete('cascade');
           
            $table->integer('dimension_id')->unsigned();
            $table->foreign('dimension_id')->references('id')->on('health_dimensions')->onDelete('cascade');
            
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
        Schema::drop('health_type_dimension');
    }
}

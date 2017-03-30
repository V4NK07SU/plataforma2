<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHealthRecordDimensionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('health_record_dimension', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('record_id')->unsigned();
            $table->foreign('record_id')->references('id')->on('health_record')->onDelete('cascade');
            
            $table->integer('dimension_id')->unsigned();
            $table->foreign('dimension_id')->references('id')->on('health_dimension')->onDelete('cascade');
            
            $table->text('observations');
            $table->double('value');
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
        Schema::drop('health_record_dimension');
    }
}

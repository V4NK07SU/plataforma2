<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationPositionFunctionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluation_position_function', function (Blueprint $table) {

            $table->integer('position_id')->unsigned();
            $table->foreign('position_id')->references('id')->on('evaluation_positions')->onDelete('cascade');

            $table->integer('function_id')->unsigned();
            $table->foreign('function_id')->references('id')->on('evaluation_functions')->onDelete('cascade');
            
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
        Schema::drop('evaluation_position_function');
    }
}

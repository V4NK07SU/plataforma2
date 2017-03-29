<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationCommitmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluation_commitments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('evaluation_id')->unsigned();
            $table->foreign('evaluation_id')->references('id')->on('evaluation_global')->onDelete('cascade');

            $table->integer('function_id')->unsigned();
            $table->foreign('function_id')->references('id')->on('evaluation_functions')->onDelete('cascade');
            
            $table->string('description');

            $table->integer('evaluated_id')->unsigned();
            $table->foreign('evaluated_id')->references('id')->on('evaluation_user_position')->onDelete('cascade');

            $table->integer('evaluator_id')->unsigned();
            $table->foreign('evaluator_id')->references('id')->on('evaluation_user_position')->onDelete('cascade');

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
        Schema::drop('evaluation_commitments');
    }
}

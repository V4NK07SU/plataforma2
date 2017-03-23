<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationCompetenciesResponsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluation_competencies_responses', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('evaluation_id')->unsigned();
            $table->foreign('evaluation_id')->references('id')->on('evaluation_global')->onDelete('cascade');

            $table->integer('competency_id')->unsigned();
            $table->foreign('competency_id')->references('id')->on('evaluation_competencies')->onDelete('cascade');

            $table->integer('answer_id')->unsigned();
            $table->foreign('answer_id')->references('id')->on('evaluation_competency_answers')->onDelete('cascade');

            $table->integer('evaluated_id')->unsigned();
            $table->integer('evaluator_id')->unsigned();

            $table->integer('rol_id')->unsigned();
            $table->foreign('rol_id')->references('id')->on('evaluation_roles')->onDelete('cascade');

            $table->softDeletes();
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
        Schema::drop('evaluation_competencies_responses');
    }
}

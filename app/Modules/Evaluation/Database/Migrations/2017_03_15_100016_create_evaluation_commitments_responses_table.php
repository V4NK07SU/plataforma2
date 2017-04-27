<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationCommitmentsResponsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluation_commitments_responses', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('evaluation_id')->unsigned();
            $table->foreign('evaluation_id')->references('id')->on('evaluation_global')->onDelete('cascade');

            $table->integer('commitment_id')->unsigned();
            $table->foreign('commitment_id')->references('id')->on('evaluation_commitments')->onDelete('cascade');

            $table->integer('answer_id')->unsigned();
            $table->foreign('answer_id')->references('id')->on('evaluation_competency_answers')->onDelete('cascade');

            $table->integer('evaluated_id')->unsigned();
            $table->foreign('evaluated_id')->references('id')->on('evaluation_user_position')->onDelete('cascade');

            $table->integer('evaluator_id')->unsigned();
            $table->foreign('evaluator_id')->references('id')->on('evaluation_user_position')->onDelete('cascade');

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
        Schema::drop('evaluation_commitments_responses');
    }
}

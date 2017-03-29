<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationCompetencyAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluation_competency_answers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('description');

            $table->integer('competency_id')->unsigned();
            $table->foreign('competency_id')->references('id')->on('evaluation_competencies')->onDelete('cascade');

            $table->integer('value');        

            

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
        Schema::drop('evaluation_competency_answers');
    }
}

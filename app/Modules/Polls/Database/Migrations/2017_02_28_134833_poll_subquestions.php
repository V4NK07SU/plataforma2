<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class PollSubquestions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poll_subquestions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('poll_question_type_id')->unsigned();
            $table->integer('poll_question_id')->unsigned();
            $table->string('title');
            $table->string('description');
            $table->timestamps();
            $table->softDeletes();


            $table->foreign('poll_question_type_id')->references('id')->on('poll_question_types')->onDelete('cascade');
            $table->foreign('poll_question_id')->references('id')->on('poll_questions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('poll_subquestions');
    }
}

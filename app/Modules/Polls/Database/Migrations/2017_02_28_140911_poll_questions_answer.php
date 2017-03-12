<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PollQuestionsAnswer extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poll_questions_answer', function (Blueprint $table) {
            $table->integer('poll_question_id')->unsigned()->nullable();
            $table->integer('poll_answer_id')->unsigned()->nullable();
            $table->integer('user_id')->unsigned()->nullable();
            $table->integer('poll_id')->unsigned()->nullable();
            $table->timestamp('answered_date')->default('2000-01-01 00:00:00');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('poll_question_id')->references('id')->on('poll_questions')->onDelete('cascade');

            
            $table->foreign('poll_answer_id')->references('id')->on('poll_answers')->onDelete('cascade');

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('poll_id')->references('id')->on('polls')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::drop('poll_questions_answer');

    }
}

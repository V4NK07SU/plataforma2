<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PollAnswers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poll_answers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('poll_question_id')->unsigned();
            $table->string('title');
            $table->string('description');
            $table->double('value');
            $table->timestamps();
            $table->softDeletes();

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
        Schema::drop('poll_answers');
    }
}

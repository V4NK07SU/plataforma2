<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PollSubquestionsAnswer extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poll_subquestions_answer', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('poll_subquestion_id')->unsigned();
            $table->string('title');
            $table->string('description');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('poll_subquestion_id')->references('id')->on('poll_subquestions')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::drop('poll_subquestions_answer');

    }
}

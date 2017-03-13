<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PollQuestions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
          Schema::create('poll_questions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('poll_item_id')->unsigned();
            $table->integer('poll_question_type_id')->unsigned();
            $table->string('title');
            $table->string('description');
            $table->integer('risk_var_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('poll_item_id')->references('id')->on('poll_items')->onDelete('cascade');
            $table->foreign('poll_question_type_id')->references('id')->on('poll_question_types')->onDelete('cascade');
            $table->foreign('risk_var_id')->references('id')->on('poll_risk_variables')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('poll_questions');
    }
}

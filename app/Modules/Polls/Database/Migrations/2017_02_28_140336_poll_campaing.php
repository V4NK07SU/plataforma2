<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PollCampaing extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poll_campaing', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('max_questions');
            $table->timestamp('start_at')->default('2000-01-01 00:00:00');
            $table->timestamp('finish_at')->default('2000-01-01 00:00:00');
            $table->integer('user_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('poll_campaing');
    }
}

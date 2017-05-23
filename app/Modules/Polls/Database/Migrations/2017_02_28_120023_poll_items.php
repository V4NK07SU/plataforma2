<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PollItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poll_items', function (Blueprint $table) {
            $table->increments('id');
            //$table->integer('poll_id')->unsigned();
            $table->string('title');
            $table->string('description');
            $table->timestamps();
            $table->softDeletes();

            //$table->foreign('poll_id')->references('id')->on('polls')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('poll_items');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PollCampaingPoll extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poll_campaing_poll', function (Blueprint $table) {
            $table->integer('id_campaing')->unsigned();
            $table->integer('id_poll')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('id_campaing')->references('id')->on('poll_campaing')->onDelete('cascade');
            $table->foreign('id_poll')->references('id')->on('polls')->onDelete('cascade');
        });

        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down()
    {
            Schema::dropIfExists('poll_campaing_poll');
        }
    }

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
            $table->integer('poll_campaing_id')->unsigned();
            $table->integer('poll_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('poll_campaing_id')->references('id')->on('poll_campaigns')->onDelete('cascade');
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
            Schema::dropIfExists('poll_campaing_poll');
        }
    }

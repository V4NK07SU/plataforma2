<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PollPollItem extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poll_poll_item', function (Blueprint $table) {
            $table->integer('poll_id')->unsigned();
            $table->integer('poll_item_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('poll_id')->references('id')->on('polls')->onDelete('cascade');
            $table->foreign('poll_item_id')->references('id')->on('poll_items')->onDelete('cascade');
        });

        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down()
    {
            Schema::dropIfExists('poll_poll_item');
        }
    }

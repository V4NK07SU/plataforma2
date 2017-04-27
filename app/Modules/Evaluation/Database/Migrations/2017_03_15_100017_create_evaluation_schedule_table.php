<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationScheduleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluation_schedule', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('evaluation_id')->unsigned();
            $table->foreign('evaluation_id')->references('id')->on('evaluation_global')->onDelete('cascade');

            $table->integer('evaluated_id')->unsigned();
            $table->foreign('evaluated_id')->references('id')->on('evaluation_user_position')->onDelete('cascade');

            $table->integer('evaluator_id')->unsigned();
            $table->foreign('evaluator_id')->references('id')->on('evaluation_user_position')->onDelete('cascade');

            $table->integer('commitments_acomplished');
            $table->timestamp('commitments_at')->default('2000-01-01 00:00:00');
            $table->integer('evaluation_acomplished');
            $table->timestamp('evaluation_at')->default('2000-01-01 00:00:00');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('evaluation_schedule');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationCompetencyLevelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluation_competency_level', function (Blueprint $table) {

            $table->integer('competency_id')->unsigned();
            $table->foreign('competency_id')->references('id')->on('evaluation_competencies')->onDelete('cascade');

            $table->integer('level_id')->unsigned();
            $table->foreign('level_id')->references('id')->on('evaluation_levels')->onDelete('cascade');

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
        Schema::drop('evaluation_competency_level');
    }
}

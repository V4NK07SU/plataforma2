<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRiskVariableTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('risk_variables', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title',64);
            $table->text('description');
            $table->integer('phenomenon_id')->unsigned();
            $table->foreign('phenomenon_id')->references('id')->on('phenomena')->onDelete('cascade');
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
        Schema::dropIfExists('risk_variables');
    }
}

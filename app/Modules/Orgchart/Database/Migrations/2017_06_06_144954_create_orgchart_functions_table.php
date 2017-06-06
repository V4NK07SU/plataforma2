<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrgchartFunctionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orgchart_functions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('position_id');
            $table->text('description');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('position_id')->references('id')->on('orgchart_positions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orgchart_functions');
    }
}

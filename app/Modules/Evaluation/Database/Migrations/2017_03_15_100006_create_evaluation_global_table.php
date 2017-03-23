<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEvaluationGlobalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluation_global', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('period_stars');
            $table->timestamp('period_ends')->default('2000-01-01 00:00:00');
            $table->timestamp('commitments_stars')->default('2000-01-01 00:00:00');
            $table->timestamp('commitments_ends')->default('2000-01-01 00:00:00');
            $table->timestamp('evaluation_stars')->default('2000-01-01 00:00:00');
            $table->timestamp('evaluation_ends')->default('2000-01-01 00:00:00');
            $table->integer('type_id');     
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
        Schema::drop('evaluation_global');
    }
}

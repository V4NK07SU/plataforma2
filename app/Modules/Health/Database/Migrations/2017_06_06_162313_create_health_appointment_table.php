<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHealthAppointmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('health_appointment', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('appointment_start')->default('2000-01-01 00:00:00');
            $table->timestamp('appointment_end')->default('2000-01-01 00:00:00'); 
            $table->integer('appointment_patient_id')->unsigned();
            $table->foreign('appointment_patient_id')->references('id')->on('users')->onDelete('cascade');            
            $table->string('appointment_status');            
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

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

        Schema::drop('health_appointment');
        //
    }
}

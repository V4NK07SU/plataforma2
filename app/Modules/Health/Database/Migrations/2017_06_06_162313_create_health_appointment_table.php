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
            $table->timestamp('appointment_start');
            $table->timestamp('appointment_end')->nullableTimestamps(); 
            $table->integer('appointment_patient_id')->unsigned()->nullable();
            $table->foreign('appointment_patient_id')->references('id')->on('users');            
            $table->string('appointment_status');            
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');

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

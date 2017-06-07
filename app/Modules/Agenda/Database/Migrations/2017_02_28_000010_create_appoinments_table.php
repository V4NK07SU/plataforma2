
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppoinmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appoinments', function (Blueprint $table) {
            $table->increments('id');

             
            $table->integer('user_id')->unsigned();
           
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            
       
            $table->integer('schedule_id')->unsigned();
            $table->foreign('schedule_id')->references('id')->on('schedule')->onDelete('cascade');


            $table->text('reason');

            $table->timestamp('accepted_at')->default('2000-01-01 00:00:00');

            $table->timestamp('start_at')->default('2000-01-01 00:00:00');

            $table->timestamp('ends_at')->default('2000-01-01 00:00:00');

            $table->timestamp('accomplished_at')->default('2000-01-01 00:00:00');

            $table->text('observations');

            $table->integer('risk_variable_id')->unsigned();
            $table->foreign('risk_variable_id')->references('id')->on('risk_variables');

            $table->string('risk_value');
            $table->integer('canceled_by');
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
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('appoinments');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}

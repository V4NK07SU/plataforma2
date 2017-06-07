<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogRelatedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_related', function (Blueprint $table) {
            $table->integer('blog_post_id')->unsigned();
            $table->integer('blog_post_related_id')->unsigned();
            $table->foreign('blog_post_id')->references('id')->on('blog_posts');
            $table->foreign('blog_post_related_id')->references('id')->on('blog_posts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_related');
    }
}

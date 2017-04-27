<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_tags', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('blog_post_id')->nullable()->unsigned();
            //$table->integer('blog_media_id')->nullable()->unsigned();
            $table->string('tag')->unique();
            $table->string('slug')->unique();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('blog_post_id')->references('id')->on('blog_posts');
            //$table->foreign('blog_media_id')->references('id')->on('blog_medias');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_tags');
    }
}

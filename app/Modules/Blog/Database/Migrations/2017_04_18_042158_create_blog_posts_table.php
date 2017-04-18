<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->unique();
            $table->string('slug')->unique();
            $table->text('content');
            $table->integer('blog_author_id')->unsigned();
            $table->boolean('featured')->default(0);
            $table->boolean('active')->default(1);
            $table->boolean('allow_comments')->default(0);
            $table->integer('views')->nullable();
            $table->string('main_media')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('blog_author_id')->references('id')->on('blog_authors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_posts');
    }
}

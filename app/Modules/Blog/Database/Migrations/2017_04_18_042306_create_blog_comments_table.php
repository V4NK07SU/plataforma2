<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('blog_post_id')->unsigned();
            $table->integer('blog_user_id')->unsigned();
            $table->integer('reply_to_id')->nullable()->unsigned();
            $table->text('comment');
            $table->boolean('read')->nullable()->default(0);
            $table->boolean('active')->nullable()->default(1);
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('blog_post_id')->references('id')->on('blog_posts');
            $table->foreign('blog_user_id')->references('id')->on('blog_users');
            $table->foreign('reply_to_id')->references('id')->on('blog_comments');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_comments');
    }
}

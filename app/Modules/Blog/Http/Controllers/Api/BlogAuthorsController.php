<?php

namespace App\Modules\Blog\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modules\Blog\Models\BlogAuthor;
use App\Modules\Blog\Http\Requests\BlogAuthorRequest;

class BlogAuthorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return BlogAuthor::paginate(10);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BlogAuthorRequest $request)
    {
        $author = new BlogAuthor();
        $author->create($request->all());

        return Response([
            'message' => 'El autor se creo con exito!',
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $author = BlogAuthor::findOrFail($id);

        return $author;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\BlogAuthorRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BlogAuthorRequest $request, $id)
    {
        BlogAuthor::find($id)->update($request->all());

        return response([
            'message' => 'El autor se actaliza con exito!',
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        BlogAuthor::destroy($id);

        return response([
            'message' => 'El autor se elimino con exito!',
        ], 200);
    }
}

<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Polls\Http\Requests\PollAnswerCreateRequests;
use App\Modules\Polls\Models\PollAnswer;
use Illuminate\Http\Request;

/**
 * @resource PollAnswerController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollAnswerController extends Controller
{
    /**
     * index
     *
     * Retorna las respuestas de las encustas en formato JSON
     *
     * @return Response()
     */

    public function index()
    {

        $pollanswer = PollAnswer::paginate(10);
        return $pollanswer;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Retorna en formato JSON una respuesta para guardar las respuestas de las encustas
     *
     * @param   PollAnswerCreateRequests $request
     *
     * @return  JSON Response()
     */

    public function store(PollAnswerCreateRequests $request)
    {

        $pollanswer = new PollAnswer();
        $pollanswer->create($request->all());

        return response([
            'message' => 'la respuesta fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_answers
     * 
     * @param  int $id
     *
     * @return JSON Response()
     */
    
    public function show($id)
    {
        $pollanswer = PollAnswer::findOrFail($id);

        return response([
            'id'          => $pollanswer->id,
            'title'       => $pollanswer->title,
            'description' => $pollanswer->description,
            'value'       => $pollanswer->value,
        ]);
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos.
     *
     * @param  PollAnswerCreateRequests  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(PollAnswerCreateRequests $request, $id)
    {
        $pollanswer = PollAnswer::findOrFail($id);
        $pollanswer->update($request->all());

        if ($pollanswer) {
            return response([
                'message' => 'La respuesta fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $pollanswer = PollAnswer::destroy($id);

        if ($pollanswer) {

            return response([
                'message' => 'el tipo de encuesta se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
 //funcion de buscar
    public function search ($keyword){
        return PollAnswer::where('title', 'like', '%' . $keyword . '%')->paginate(10);
    }
}

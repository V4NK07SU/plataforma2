<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollQuestionTypeCreateRequests;
use App\Modules\Polls\Models\PollQuestionType;
use Illuminate\Http\Request;

/**
 * @resource PollQuestionTypeController
 *
 * Recurso  Tipo de pregunta de encuesta para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestionTypeController extends Controller
{

    /**
     * index
     *
     * Retorna las respuestas de las encustas en formato JSON
     *
     * @return   Response()
     */

    public function index()
    {
        $pollquestiontype = PollQuestionType::paginate(10);
        return $pollquestiontype;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Retorna un  Tipo de pregunta de encuesta en formato JSON
     *
     * @param   PollQuestionTypeCreateRequests $request
     *
     * @return  JSON Response()
     */

    public function store(PollQuestionTypeCreateRequests $request)
    {
        //
        $pollquestiontype = new PollQuestionType();
        $pollquestiontype->create($request->all());

        return response([
            'message' => 'El tipo de pregunta fue creado con exito',
        ], 200);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_questions_types
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $pollquestiontype = PollQuestionType::findOrFail($id);

        return response([
            'id'          => $pollquestiontype->id,
            'title'       => $pollquestiontype->title,
            'description' => $pollquestiontype->description,
        ]);
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los registros especificados.
     *
     * @param  PollQuestionTypeCreateRequests $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollQuestionTypeCreateRequests $request, $id)
    {
        $pollquestiontype = PollQuestionType::findOrFail($id);
        $pollquestiontype->update($request->all());

        if ($pollquestiontype) {
            return response([
                'message' => 'El tipo de pregunta en la encuesta fue actualizada con exito',
            ], 200);
        }
    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function destroy($id)
    {

        $pollquestiontype = PollQuestionType::destroy($id);

        if ($pollquestiontype) {

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

    public function search($keyword){
        return PollQuestionType::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }

    public function getAll(){
        $pollQuestionType = PollQuestionType::all();
        return response()->json(['data' => $pollQuestionType->toArray()]);
    }
    
}

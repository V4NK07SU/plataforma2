<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollSubquestionsCreateRequest;
use App\Modules\Polls\Models\PollSubquestion;
use Illuminate\Http\Request;
use App\Modules\Polls\Models\PollQuestion;

/**
 * @resource PollSubquestionsController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollSubquestionsController extends Controller
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
        $pollsubquestion = PollSubquestion::with('pollQuestion')->paginate(10);
        
        return $pollsubquestion;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Retorna en formato JSON una respuesta para guardar las respuestas de las encuestas
     *
     * @param   PollSubquestionsCreateRequest $request
     *
     * @return  JSON Response()
     */
    public function store(PollSubquestionsCreateRequest $request)
    {

        $pollsubquestion = new PollSubquestion();
        $pollsubquestion->create($request->all());

        return response([
            'message' => 'La subpregunta de la encuesta  se ha creado con exito',
        ]);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_subquestions
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $pollsubquestion = PollSubquestion::findOrFail($id);

        return response([
            'id'          => $pollsubquestion->id,
            'question_id' => $pollsubquestion->question_id,
            'title'       => $pollsubquestion->title,
            'description' => $pollsubquestion->description,

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
     * @param  PollSubquestionsCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollSubquestionsCreateRequest $request, $id)
    {
        $pollsubquestion = PollSubquestion::findOrFail($id);
        $pollsubquestion->update($request->all());

        if ($pollsubquestion) {
            return response([
                'message' => 'La subpregunta de la encuesta fue actualizada con exito',
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
        $pollsubquestion = PollSubquestion::destroy($id);

        if ($pollsubquestion) {

            return response([
                'message' => 'La subpregunta de la encuesta se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }

    public function search($keyword){
        return PollSubquestion::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }
    
}

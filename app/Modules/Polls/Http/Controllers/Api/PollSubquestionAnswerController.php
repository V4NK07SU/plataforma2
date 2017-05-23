<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Models\PollSubquestionAnswer;
use Illuminate\Http\Request;

/**
 * @resource PollQuestionAnswerController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollSubquestionAnswerController extends Controller
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
        $pollSubquestionAnswer = PollSubquestionAnswer::paginate(10);
        return $pollSubquestionAnswer;
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
     * store
     *
     * Retorna en formato JSON una respuesta para guardar las respuestas de las encustas
     *
     * @param   PollQuestionAnswerCreateRequest $request
     *
     * @return  JSON Response()
     */
    public function store(Request $request)
    {
        $pollSubquestionAnswer = new PollSubquestionAnswer();
        $pollSubquestionAnswer->create($request->all());

        return response([
            'message' => 'La respuesta de la subpregunta  se ha creado con exito',
        ]);
    }

    /**
     * show
     *
     * @param  int $id
     *
     * @return JSON Response()
     */
    public function show($id)
    {
            $pollSubquestionAnswer = PollSubquestionAnswer::findOrFail($id);
                return response([
                'id'                  => $pollSubquestionAnswer->id,
                'poll_subquestion_id' => $pollSubquestionAnswer->poll_question_id,
                'title'               => $pollSubquestionAnswer->poll_answer_id,
                'description'         => $pollSubquestionAnswer->user_id,
            ]);
    }

    /**
     *
     * update
     *
     * Actualiza los registros especificados.
     * @param  PollTypeCreateRequest $request
     * @param  int  $id
     * @return JSON, response()
     */

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los registros especificados.
     *
     * @param  PollQuestionAnswerCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    /**
     * [update description]
     * @param  PollQuestionAnswerCreateRequest $request [description]
     * @param  [type]                          $id      [description]
     * @return [type]                                   [description]
    */

    public function update(Request $request, $id)
        {
                $pollSubquestionAnswer = PollSubquestionAnswer::findOrFail($id);
                $pollSubquestionAnswer->update($request->all());

                if ($pollSubquestionAnswer) {
                return response([
                'message' => 'La Respuesta de la subpregunta en la encuesta fue actualizada con exito',
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

        $pollSubquestionAnswer = PollSubquestionAnswer::destroy($id);

        if ($pollSubquestionAnswer) {

            return response([
                'message' => 'La Respuesta de la subpregunta se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }

}

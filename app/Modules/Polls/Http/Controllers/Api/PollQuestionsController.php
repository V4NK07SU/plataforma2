<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollQuestionsCreateRequest;
use App\Modules\Polls\Models\PollQuestion;
use App\Modules\Polls\Models\PollItem;
use App\Modules\Polls\Models\PollQuestionType;
use Illuminate\Http\Request;

/**
 * @resource PollQuestionsController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollQuestionsController extends Controller
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
        $pollquestions = PollQuestion::paginate(10);
        return $pollquestions;
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
     * @param   PollQuestionsCreateRequest $request
     *
     * @return  JSON Response()
     */
    public function store(PollQuestionsCreateRequest $request)
    {
        $pollquestions = new PollQuestion();
        $pollquestions->create($request->all());

        return response([
            'message' => 'la pregunta de la encuesta se ha creado con exito',
        ]);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_questions
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $pollquestions = PollQuestion::findOrFail($id);

        return response([
            'id'                    => $pollquestions->id,
            'poll_item_id'          => $pollquestions->poll_item_id,
            'poll_question_type_id' => $pollquestions->poll_question_type_id,
            'title'                 => $pollquestions->title,
            'description'           => $pollquestions->description,
            'risk_var_id'           => $pollquestions->risk_var_id,
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
     * @param  PollQuestionsCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollQuestionsCreateRequest $request, $id)
    {
        $pollquestion = PollQuestion::findOrFail($id);
        $pollquestion->update($request->all());

        if ($pollquestion) {
            return response([
                'message' => 'La pregunta de la encuesta fue actualizada con exito',
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
        $pollquestions = PollQuestion::destroy($id);

        if ($pollquestions) {

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
        return PollQuestion::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }

    public function pollitem(){
       $polltypes = PollItem::all();
       return $polltypes;
    }  
    
    public function pollquestiontype(){
       $pollquestiontype = PollQuestionType::all();
       return $pollquestiontype;

    }
}

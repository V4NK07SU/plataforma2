<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollItemsCreateRequest;
use App\Modules\Polls\Models\PollItem;
use App\Modules\Polls\Models\Poll;
use App\Modules\Polls\Models\PollQuestion;
use App\Modules\Polls\Models\PollAnswer;
use App\Modules\Polls\Models\PollSubquestion;
use App\Modules\Polls\Models\PollSubquestionAnswer;
use Illuminate\Http\Request;

/**
 * @resource PollItemsController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollItemsController extends Controller
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
        $pollitem = PollItem::with('pollQuestions', 'polls')->paginate(10);
        return $pollitem;
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
     * @param   PollItemsCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(PollItemsCreateRequest $request)
    {
        //dd($request->all());


        $pollitem = PollItem::create([
            'title'             => $request->title,
            'description'       => $request->description,
        ]);
        

         return response()->success(['mesagge' => 'El item de la encuesta se ha creado con exito']);

    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_item
     *
     * @param  int $id
     *
     * @return JSON Response()
     */
 
    public function show($id)
    {
 
        $pollitem = PollItem::with('polls')->findOrFail($id);
      
        return response([
            'id'          => $pollitem->id,
            'title'       => $pollitem->title,
            'description' => $pollitem->description,
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
     * @param  PollItemsCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollItemsCreateRequest $request, $id)
    {
        $pollitem = PollItem::findOrFail($id);
        $pollitem->update($request->all());

        return response()->success(['mesagge' => 'El item de la encuesta ha sido actualizado con exito']);
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
        $pollitem = PollItem::destroy($id);

        if ($pollitem) {

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
        return PollItem::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }

    public function getAll()
    {
        $pollItem = PollItem::all();
        return response()->json(['data' => $pollItem->toArray()]);
    }



    public function saveAll(Request $request){  
        //dd($request->all());  
        //Guarar Item
        $pollItem = PollItem::create([
            'title'           => $request->title,
            'description'     => $request->description,
        ]);  

        //Guardar Pregunta
        foreach ($request->questions as $question) {
            $PollQuestion = PollQuestion::create([
                    'title'                    => $question['title'],
                    'description'              => $question['description'],
                    'poll_question_type_id'    => $question['poll_question_type_id'],
                    'risk_var_id'              => $question['risk_var_id'],
                    'poll_item_id'             => $pollItem->id
                ]);
                  foreach ($question['answers'] as $answer) {
                    PollAnswer::create([
                        'poll_question_id' => $PollQuestion->id,
                        'title'            => $answer['title'],
                        'description'      => $answer['description'],
                        'value'            => $answer['value'],
                   ]);
                  }
                   foreach ($question['subquestions'] as $subquestion) {
                    $PollSubquestion = PollSubquestion::create([
                        'poll_question_id'      => $PollQuestion->id,
                        'poll_question_type_id' => $subquestion['poll_question_type_id'],
                        'title'                 => $subquestion['title'],
                        'description'           => $subquestion['description'],
                        
                   ]);

                            foreach ($subquestion['poll_question_answers'] as $subquestionanswer) {
                                PollSubquestionAnswer::create([
                                    'poll_subquestion_id'   => $PollSubquestion->id,
                                    'title'                 => $subquestionanswer['title'],
                                    'description'           => $subquestionanswer['description'],
                                    'value'                 => $subquestionanswer['value'],
                                ]);
                        }
                  }  
        }

         return response()->success(['mesagge' => 'Item creado con éxito!', 'campaña' => $pollItem]);
    }
}

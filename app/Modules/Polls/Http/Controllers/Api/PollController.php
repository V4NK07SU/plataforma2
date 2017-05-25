<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollCreateRequests;
use App\Modules\Polls\Models\Poll;
use App\Modules\Polls\Models\PollType;
use App\Modules\Polls\Models\PollItem;
use Illuminate\Http\Request;

/**
 * @resource PollController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollController extends Controller
{

    /**
     * index
     *
     * Retorna las respuestas de las encustas en formato JSON
     *
     * @return  Response()
     */

    public function index()
    {
        $poll = Poll::with('pollType', 'user')->paginate(10);
        return $poll;
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
     * @param   PollCreateRequests $request
     *
     * @return  JSON Response()
     */

    public function store(PollCreateRequests $request)
    {
        //dd($request->all());

         $poll = Poll::create([
            'title'             => $request->title,
            'description'       => $request->description,
            'user_id'           => $request->user_id,
            'poll_types_id'     => $request->poll_types_id,
        ]);

        if($request->poll_items){
            foreach ($request->poll_items as $k => $v) {
                $items[] = $v['id'];
            }
            $poll->pollItems()->sync($items);

            return response()->success(['mesagge' => 'Encuesta creada con éxito!']);
        }  
         return response()->success(['mesagge' => 'Encuesta creada con éxito!']);


    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla polls
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $polls = Poll::with('pollItems')->findOrFail($id); 
        $items = PollItem::all();

        return ['polls' => $polls, 'items' => $items];
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
     * @param  PollCreateRequests $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollCreateRequests $request, $id)
    {
  
        $poll = Poll::findOrFail($id);
        $poll->update($request->all());

        
        $items = [];

        foreach($request->input('poll_items') as $k => $v) {
            $items[] = $v['id'];
        }

        $poll->pollItems()->sync($items);
        return response()->success(['mesagge' => 'Encuesta actualizada con exito']);

    
    } 

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos e.
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function destroy($id)
    {
        $poll = Poll::destroy($id);

        if ($poll) {
            return response([
                'message' => 'La encuesta se he eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }

    public function search($keyword){
        return Poll::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }

    public function getAll(){
        $poll = Poll::with('pollItems.pollQuestions')->get();  
        return response()->json(['data' => $poll->toArray()]);
    }
    
}

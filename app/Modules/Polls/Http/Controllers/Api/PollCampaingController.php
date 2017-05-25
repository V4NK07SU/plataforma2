<?php

namespace App\Modules\Polls\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Polls\Http\Requests\PollCampaingCreateRequest;
use App\Modules\Polls\Models\PollCampaing;
use App\Modules\Polls\Models\Poll;
use App\Modules\Polls\Models\PollItem;
use Illuminate\Http\Request;

/**
 * @resource PollCampaingController
 *
 * Recurso respuestas de encustas para ser consumidos
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollCampaingController extends Controller
{

    /**
     * index
     *
     * Retorna las respuestas de las encustas en formato JSON

     * @return   Response()
     */

    public function index()
    {
        $pollcampaing = PollCampaing::with('user')->paginate(10);
        return $pollcampaing;
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
     * @param   PollCampaingCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(PollCampaingCreateRequest $request)
    {
        
        $pollcampaing = PollCampaing::create([
            'max_questions'   => $request->max_questions,
            'start_at'        => $request->start_at,
            'finish_at'       => $request->finish_at,
            'user_id'         => $request->user_id,
        ]);      

        if($request->polls){
            foreach ($request->polls as $k => $v) {
                $polls[] = $v['id'];
            }
            $pollcampaing->polls()->sync($polls);
            return response()->success(['mesagge' => 'campaña creada con éxito!', 'campaña' => $pollcampaing, 'encuesta' => $polls]);
        }  
         return response()->success(['mesagge' => 'campaña creada con éxito!', 'campaña' => $pollcampaing]);
    }

    /**
     * show
     *
     * Retorna un campo determinado de la tabla poll_campaing con su respectiva relacion(Muchos a muchos)
     * 
     * @param  int $id
     *
     * @return JSON Response()
     */
    
    public function show($id)
    {

        $pollcampaing = PollCampaing::with('polls')->findOrFail($id);
        $polls = Poll::all();

        return ['campaing' => $pollcampaing, 'polls' => $polls];
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los registros especificados.
     * @param  PollCampaingCreateRequest $request
     *
     * @param  int  $id
     *
     * @return JSON, response()
     */

    public function update(PollCampaingCreateRequest $request, $id)
    {
        $pollcampaing = PollCampaing::findOrFail($id);
        $pollcampaing->update($request->all());

        $polls = [];
        foreach($request->input('polls') as $k => $v) {
            $polls[] = $v['id'];
        }
        $pollcampaing->polls()->sync($polls);
        return response()->success(['mesagge' => 'Campaña de encuesta fue actualizada con exito', 'polls' => $polls, 'Campaing' => $pollcampaing]);
    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos.
     *
     * @param  int  $id
     *
     * @return JSON Respons()
     */

    public function destroy($id)
    {
        $pollcampaing = PollCampaing::destroy($id);

        if ($pollcampaing) {

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
        return PollCampaing::where('max_questions', 'like', '%' . $keyword . '%')
        ->orWhere('start_at', 'like', '%' . $keyword . '%')
        ->orWhere('finish_at', 'like', '%' . $keyword . '%')->paginate(10);
    } 


   
 public function getAll(){
        $pollCampaing = PollCampaing::with('polls')->get();
        return response()->json(['data' => $pollCampaing->toArray()]);
    }



}

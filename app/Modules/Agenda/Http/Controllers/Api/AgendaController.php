<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\AgendaCreateRequest;
use App\Modules\Agenda\Models\Agenda;
use App\Modules\Agenda\Models\Schedule;
use Illuminate\Http\Request;

/**
 *@resource AgendaController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class AgendaController extends Controller
{
    /**
     *
     * index
     *
     * Retorna las respuestas de la agenda en formato JSON
     * Retorna  en formato JSON
     *
     * @param   $[empty] [empty]
     * @return  JSON Response()
     */
    public function index()
    {
        $agendas = Agenda::paginate(10);
        return $agendas;
    }

    /**
     *
     *Se muestra el formulario para crear un nuevo recurso
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store.
     *
     *Retorna formato JSON
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AgendaCreateRequest $request)
    {
      $diary = Agenda::create([
            'period_id'        => $request->period_id,
            'observacion'       => $request->observacion,
            'user_id'         => 1,
        ]);    

        $schedules =[];
      if ($request->schedules) {
       foreach ($request->schedules as $k => $v) {
            $schedules[] = $v['id'];
        }
    
        $diary->schedules()->sync($schedules);  

        return response()->success(['mesagge' => 'Agenda creada con éxito!', 'Agenda' => $diary, 'Horario' => $schedules]); 
      }
        
      return response()->success(['mesagge' => 'Agenda Creada Con éxito']);
        
    }

    /**
     * show
     *
     * muestra los datos de agenda
     *
     *
     * @param  int  $id
     *
     * @return $agenda
     */
    public function show($id)
    {
        $agenda = Agenda::with('schedules')->findOrFail($id);
        $schedules = Schedule::all();

        return ['diary'=> $agenda, 'schedules'=>$schedules];
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
     * Update.
     *
     * Actualiza los registros especificados
     *
     * @param  \Illuminate\Http\Request  $request     *
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AgendaCreateRequest $request, $id)
    {
        
        $diary = Agenda::findOrFail($id);
        $diary->update($request->all());
        
        $schedules =[];
  
       foreach ($request->schedules as $k => $v) {
            $schedules[] = $v['id'];
        }
    
        $diary->schedules()->sync($schedules);  

        return response()->success(['mesagge' => 'Agenda Actualizada con éxito!', 'Agenda' => $diary, 'Horario' => $schedules]); 
      
        
      return response()->success(['mesagge' => 'Agenda Actualizada Con éxito']);
    }

    /**
     * Destroy.
     *
     * Remueve el campo especifico de la base de datos
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Agenda::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
      public function search ($keyword) {
        return Agenda::where('user_id', 'like', '%' . $keyword . '%')
        ->orWhere('period_id', 'like', '%' . $keyword . '%')
        ->orWhere('observacion', 'like', '%' . $keyword . '%')->paginate(10);
    }

    public function getAll (){
        $agenda = Agenda::all();

        return response()->json(['data'=> $agenda->toArray()]);

    }
}

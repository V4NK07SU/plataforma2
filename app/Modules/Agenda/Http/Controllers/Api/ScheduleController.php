<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\ScheduleCreateRequest;
use App\Modules\Agenda\Models\Schedule;
use Illuminate\Http\Request;
/**
 *@resource ScheduleController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class ScheduleController extends Controller
{
    /**
     * index
     * 
     * Retorna las respuestas de los horarios en formato JSON 
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $schedules = Schedule::paginate(10);
        return $schedules;
    }

    /**
     * create
     * 
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
     * Retorna en formato JSON una respuesta para guardar las respuestas.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ScheduleCreateRequest $request)
    {
        $schedule = new Schedule();
        $schedule->create($request->all());

        return response([
            'message' => 'el horario se han ingresado con exito',
        ], 200);
    }

    /**
     * show
     * 
     * Muestra un recurso especificado.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shedule= Schedule::findOrFail($id);

        return  $shedule;
    }

    /**
     * edit
     * 
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
     * Update
     * 
     * Actualiza los registros especificados
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ScheduleCreateRequest $request, $id)
    {
        Schedule::find($id)->update($request->all());

        return response([
            'message' => 'se actualizo con exito',
        ], 200);
    }

    /**
     * destroy
     * 
     * Remueve el campo especificado de la base de datos.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Schedule::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
     public function search ($keyword) {
        return Schedule::where('observation', 'like', '%' . $keyword . '%')
        ->orWhere('start_at', 'like', '%' . $keyword . '%')
        ->orWhere('ends_at', 'like', '%' . $keyword . '%')->paginate(10);
    }


    public function getAll()
    {
        $schedule = Schedule::all();
        return response()->json(['data'=> $schedule->toArray()]);

    }
}

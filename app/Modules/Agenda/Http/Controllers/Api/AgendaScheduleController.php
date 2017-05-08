<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Modules\Agenda\Models\AgendaSchedule;
use App\Modules\Agenda\Requests\AgendaScheduleCreateRequest;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class AgendaScheduleController extends Controller
{
   
    /**
     * index
     *
     * Retorna  en formato JSON
     *
     * @return $dias
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $agendaschedule = AgendaSchedule::paginate(10);
        return $agendaschedule;
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
     * Retorna en formato JSON.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AgendaScheduleCreateRequest $request)
    {

        $agendaschedule = new AgendaSchedule();
        $dia->create($request->all());

        return response([
            'message' => 'se ha ingresado con exito',
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
        $agendaschedule = AgendaSchedule::findOrFail($id);

        return $agendaschedule;
    }

    /**
     * edit
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
    public function update(AgendaScheduleCreateRequest $request, $id)
    {
       AgendaSchedule::find($id)->update($request->all());

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
        AgendaSchedule::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
        public function search ($keyword) {
        return AgendaSchedule::where('observation', 'like', '%' . $keyword . '%')
        ->orWhere('service_id', 'like', '%' . $keyword . '%')
        ->orWhere('starts_at', 'like', '%' . $keyword . '%')
        ->orWhere('ends_at', 'like', '%' . $keyword . '%')->paginate(10);
    }
}

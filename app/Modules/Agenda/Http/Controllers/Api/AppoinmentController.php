<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\AppoinmentCreateRequest;
use App\Modules\Agenda\Models\Appoinment;
use Illuminate\Http\Request;

/**
 *@resource AppoinmentController
 *
 *Recurso de las citas para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class AppoinmentController extends Controller
{
    /**
     * index
     *
     * @return [$appoinments] [trae los datos del modelo cita]
     * Retorna  en formato JSON
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         
        $appoinments = Appoinment::paginate(10);
        return $appoinments;
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
     * Retorna en formato JSON una respuesta para guardar las citas.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AppoinmentCreateRequest $request)
    {
        $appoinment = new Appoinment();
        $appoinment ->create($request->all());

        return Response([
        'message' =>'la cita esta lista',
        ],200);
    }

    /**
     * show
     * Muestra un recurso especificado.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $appoinment= Appoinment::findOrFail($id);

        return $appoinment;
    }

    
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
    public function update(AppoinmentCreateRequest $request, $id)
    {
        Appoinment::find($id)->update($request->all());

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
        Appoinment::destroy($id);


        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }

    public function search ($keyword) {
        return Appoinment::where('user_id', 'like', '%' . $keyword . '%')
        ->orWhere('schedule_id', 'like', '%' . $keyword . '%')
        ->orWhere('reason', 'like', '%' . $keyword . '%')
        ->orWhere('observations', 'like', '%' . $keyword . '%')
        ->orWhere('accepted_at', 'like', '%' . $keyword . '%')
        ->orWhere('start_at', 'like', '%' . $keyword . '%')
        ->orWhere('ends_at', 'like', '%' . $keyword . '%')
        ->orWhere('accomplished_at', 'like', '%' . $keyword . '%')
        ->orWhere('risk_variable_id', 'like', '%' . $keyword . '%')
        ->orWhere('risk_value', 'like', '%' . $keyword . '%')
        ->orWhere('canceled_by', 'like', '%' . $keyword . '%')->paginate(10);
    }
}

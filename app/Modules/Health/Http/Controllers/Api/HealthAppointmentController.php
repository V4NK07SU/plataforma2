<?php

namespace App\Modules\Health\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modules\Health\Http\Requests\HealthAppointmentCreateRequest;
use App\Modules\Health\Models\HealthAppointment;


class HealthAppointmentController extends Controller
{
    /**
     * index
     *
     * 
     *
     * @return Response()
     */

    public function index()
    {

        $healthappointment = HealthAppointment::paginate(10);
        return $healthappointment;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos  en la  tabla health_appoinment
     *
     * @param   HealthAppointmentCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(HealthAppointmentCreateRequest $request)
    {

        $healthappointment = new HealthAppointment();
        $healthappointment->create($request->all());

        return response([
            'message' => 'la cita fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra un dato de la tabla health_appointment.
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $healthappointment = HealthAppointment::findOrFail($id);

        return $healthappointment;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la tabla health_appointment.
     *
     * @param  HealthAppointmentCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(HealthAppointmentCreateRequest $request, $id)
    {
        $healthappointment = HealthAppointment::findOrFail($id);
        $healthappointment->update($request->all());

        if ($healthappointment) {
            return response([
                'message' => 'la cita fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Elimina un registro de la base de datos de la tabla health_appointment
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $healthappointment = HealthAppointment::destroy($id);

        if ($healthappointment) {

            return response([
                'message' => 'la cita se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}

<?php

namespace App\Modules\Health\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Health\Http\Requests\HealthHistoryCreateRequest;
use App\Modules\Health\Models\HealthHistory;
use Illuminate\Http\Request;

/**
 * @resource HealthHistoryController
 *
 * Controlador para realizar el respecibo CRUD.
 *
 * @author Danny Rojas Reyes <afarable-1997@hotmail.com>
 */

class HealthHistoryController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de las historias clinicas.
     *
     * @return Response()
     */

    public function index()
    {

        $healthhistory = HealthHistory::paginate(10);
        return $healthhistory;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos en la tabla health_history.
     *
     * @param   HealthHistoryCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(HealthHistoryCreateRequest $request)
    {

        $healthhistory = new HealthHistory();
        $healthhistory->create($request->all());

        return response([
            'message' => 'la historia clinica  fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra un dato de la base de datos en la tabla health_history.
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $healthhistory = HealthHistory::findOrFail($id);

        return $healthhistory;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la tabla health_history.
     *
     * @param  HealthHistoryCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(HealthHistoryCreateRequest $request, $id)
    {
        $healthhistory = HealthHistory::findOrFail($id);
        $healthhistory->update($request->all());

        if ($healthhistory) {
            return response([
                'message' => 'La historia clinica  fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado en la base de datos en la tabla health_history.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $healthhistory = HealthHistory::destroy($id);

        if ($healthhistory) {

            return response([
                'message' => 'la historia clinica eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }

     public function search ($keyword){
        return HealthHistory::where('date', 'like', '%' . $keyword . '%')
        ->orWhere('observations', 'like', '%' . $keyword . '%')
        ->orWhere('tracing', 'like', '%' . $keyword . '%')
        ->orWhere('reason', 'like', '%' . $keyword . '%')->paginate(10);
    }

   

}

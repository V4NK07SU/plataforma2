<?php

namespace App\Modules\Health\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Health\Http\Requests\HealthRecordDimensionCreateRequest;
use App\Modules\Health\Models\HealthRecordDimension;
use Illuminate\Http\Request;

/**
 * HealthRecordDimensionController
 *
 * Retorna un listado de las historias clinicas.
 *
 * @return Response()
 */

class HealthRecordDimensionController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de las dimensiones de salud.
     *
     * @return Response()
     */

    public function index()
    {

        $healthrecorddimension = HealthRecordDimension::paginate(10);
        return $healthrecorddimension;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos  en la tabla health_record_dimension
     *
     * @param   HealthRecordDimensionCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(HealthRecordDimensionCreateRequest $request)
    {

        $healthrecorddimension = new HealthRecordDimension();
        $healthrecorddimension->create($request->all());

        return response([
            'message' => 'El record de la dimension de salud fue creado con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra un dato de la base de datos en la tabla health_record_dimension
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $healthrecorddimension = HealthRecordDimension::findOrFail($id);

        return $healthrecorddimension;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la tabla health_record_dimension
     *
     * @param  HealthRecordDimensionCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(HealthRecordDimensionCreateRequest $request, $id)
    {
        $healthrecorddimension = HealthRecordDimension::findOrFail($id);
        $healthrecorddimension->update($request->all());

        if ($healthrecorddimension) {
            return response([
                'message' => 'El record de la dimension de salud se ha actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla health_record_dimension
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $healthrecorddimension = HealthRecordDimension::destroy($id);

        if ($healthrecorddimension) {

            return response([
                'message' => 'El record de la dimension de salud se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }

     public function search ($keyword){
        return HealthRecordDimension::where('record_id', 'like', '%' . $keyword . '%')
        ->orWhere('dimension_id', 'like', '%' . $keyword . '%')
        ->orWhere('observations', 'like', '%' . $keyword . '%')
        ->orWhere('value', 'like', '%' . $keyword . '%')->paginate(10);
    }
}

<?php

namespace App\Modules\Health\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Health\Http\Requests\HealthDimensionsCreateRequest;
use App\Modules\Health\Models\HealthDimension;
use Illuminate\Http\Request;

/**
 * @resource HealthDimensionsController
 *
 * Controlador para realizar el respecibo CRUD.
 *
 * @author Danny Rojas Reyes <afarable-1997@hotmail.com>
 */

class HealthDimensionsController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de respuestas de las dimensiones de salud.
     *
     * @return Response()
     */

    public function index()
    {

        $healthdimension = HealthDimension::paginate(10);
        return $healthdimension;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos en la tabla health_dimensions.
     *
     * @param   HealthDimensionsCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(HealthDimensionsCreateRequest $request)
    {

        $healthdimension = new HealthDimension();
        $healthdimension->create($request->all());

        return response([
            'message' => 'la dimensiones ha sido creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra un dato de la tabla health_dimensions.
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $healthdimension = HealthDimension::findOrFail($id);

        return $healthdimension;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la tabla health_dimensions.
     *
     * @param  HealthDimensionsCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(HealthDimensionsCreateRequest $request, $id)
    {
        $healthdimension = HealthDimension::findOrFail($id);
        $healthdimension->update($request->all());

        if ($healthdimension) {
            return response([
                'message' => 'Las dimensiones han sido actualizadas con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Elimina el campo especificado en la base de datos en la tabla health_dimensions.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $healthdimension = HealthDimension::destroy($id);

        if ($healthdimension) {

            return response([
                'message' => 'Las dimension se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }

    public function search ($keyword){
        return HealthDimension::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }

     public function getAll(){
        $healthDimension = HealthDimension::all();
        return response()->json(['data'=>$healthDimension->toArray()]);
    }

    

    
}

<?php

namespace App\Modules\Health\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Health\Http\Requests\HealthTypesCreateRequest;
use App\Modules\Health\Models\HealthType;
use Illuminate\Http\Request;

/**
 * HealthTypesController
 *
 * Retorna un listado de las historias clinicas.
 *
 * @return Response()
 */

class HealthTypesController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de los tipos de salud.
     *
     * @return Response()
     */

    public function index()
    {

        $healthtype = HealthType::paginate(10);
        return $healthtype;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos  el a tabla health_types
     *
     * @param   HealthTypesCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(HealthTypesCreateRequest $request)
    {

        $healthtype = new HealthType();
        $healthtype->create($request->all());

        return response([
            'message' => 'El tipo de salud fue creado con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra un dato de la tabla health_types
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $healthtype = HealthType::findOrFail($id);

        return $healthtype;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la    tabla health_types.
     *
     * @param  HealthTypesCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(HealthTypesCreateRequest $request, $id)
    {
        $healthtype = HealthType::findOrFail($id);
        $healthtype->update($request->all());

        if ($healthtype) {
            return response([
                'message' => 'El tipo de salud fue actualizado con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla health_types.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $healthtype = HealthType::destroy($id);

        if ($healthtype) {

            return response([
                'message' => 'EL tipo de salud se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
    public function search ($keyword) {
        return HealthType::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }
    public function getAll()
    {
        $healthtype = HealthType::all();
        return response()->json(['data' => $healthtype->toArray()]);
    }
}

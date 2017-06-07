<?php

namespace App\Modules\Health\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Health\Http\Requests\HealthDimensionsCategoriesCreateRequest;
use App\Modules\Health\Models\HealthDimensionCategory;
use Illuminate\Http\Request;

/**
 * HealthTypeDimensionController
 *
 * Retorna un listado de las historias clinicas.
 *
 * @return Response()
 */

class HealthTypeDimensionController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de los tipos de dimension de salud.
     *
     * @return Response()
     */

    public function index()
    {

        $healthdimensioncategory = HealthDimensionCategory::paginate(10);
        return $healthdimensioncategory;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos  en la tabla health_type_dimension
     *
     * @param   HealthDimensionsCategoriesCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(HealthDimensionsCategoriesCreateRequest $request)
    {

        $healthdimensioncategory = new HealthDimensionCategory();
        $healthdimensioncategory->create($request->all());

        return response([
            'message' => 'el tipo de dimension  fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra un dato de la tabla health_type_dimension
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $healthdimensioncategory = HealthDimensionCategory::findOrFail($id);

        return $healthdimensioncategory;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la tabla health_type_dimension.
     *
     * @param  HealthDimensionsCategoriesCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(HealthDimensionsCategoriesCreateRequest $request, $id)
    {
        $healthdimensioncategory = HealthDimensionCategory::findOrFail($id);
        $healthdimensioncategory->update($request->all());

        if ($healthdimensioncategory) {
            return response([
                'message' => 'el tipo de dimension  fue actualizado con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla health_type_dimension.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $healthdimensioncategory = HealthDimensionCategory::destroy($id);

        if ($healthdimensioncategory) {

            return response([
                'message' => 'el tipo de dimension  eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
    public function getAll()
    {
        $healthdimensioncategory = HealthDimensionCategory::all();
        return response()->json(['data' => $healthdimensioncategory->toArray()]);
    }
}

<?php

namespace App\Modules\Health\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Health\Http\Requests\HealthDimensionsCategoriesCreateRequest;
use App\Modules\Health\Models\HealthDimensionCategory;
use Illuminate\Http\Request;

/**
 * @resource HealthDimensionsCategoriesController
 *
 * Controlador para realizar el respecibo CRUD.
 *
 * @author Danny Rojas Reyes <afarable-1997@hotmail.com>
 */

class HealthDimensionsCategoriesController extends Controller
{
    /**
     * index
     *
     * retorna un listado de las categorias del hitorias clinicas.
     *
     * @return Response()
     */

    public function index()
    {

        $healthdimensionscategory = HealthDimensionCategory::paginate(10);
        return $healthdimensionscategory;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos  en la  tabla health_dimension
     *
     * @param   HealthDimensionsCategoriesCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(HealthDimensionsCategoriesCreateRequest $request)
    {

        $healthdimensionscategory = new HealthDimensionCategory();
        $healthdimensionscategory->create($request->all());

        return response([
            'message' => 'la dimension fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra un dato de la tabla health_dimension.
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $healthdimensionscategory = HealthDimensionCategory::findOrFail($id);

        return $healthdimensionscategory;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la tabla health_dimension.
     *
     * @param  HealthDimensionsCategoriesCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(HealthDimensionsCategoriesCreateRequest $request, $id)
    {
        $healthdimensionscategory = HealthDimensionCategory::findOrFail($id);
        $healthdimensionscategory->update($request->all());

        if ($healthdimensionscategory) {
            return response([
                'message' => 'la dimension fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Elimina un registro de la base de datos de la tabla health_dimension
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $healthdimensionscategory = HealthDimensionCategory::destroy($id);

        if ($healthdimensionscategory) {

            return response([
                'message' => 'la dimension eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }

     public function search ($keyword){
        return HealthDimensionCategory::where('title', 'like', '%' . $keyword . '%')
        ->orWhere('description', 'like', '%' . $keyword . '%')->paginate(10);
    }

    public function getAll(){
        $healthDimensionCategory = HealthDimensionCategory::all();
        return response()->json(['data'=>$healthDimensionCategory->toArray()]);
    }
}

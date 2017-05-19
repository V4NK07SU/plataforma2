<?php

namespace App\Modules\Health\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Health\Http\Requests\HealthRecordCreateRequest;
use App\Modules\Health\Models\HealthRecord;
use Illuminate\Http\Request;

/**
 * HealthRecordController
 *
 * Retorna un listado de las historias clinicas.
 *
 * @return Response()
 */

class HealthRecordController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de los records de salud.
     *
     * @return Response()
     */

    public function index()
    {

        $healthrecord = HealthRecord::with('healthUsers','healthType')->paginate(10);
        return $healthrecord;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos  en la tabla health_record.
     *
     * @param   HealthRecordCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(HealthRecordCreateRequest $request)
    {

        $healthrecord = new HealthRecord();
        $healthrecord->create($request->all());

        return response([
            'message' => 'El record de salud fue creado con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra un dato de la base de datos  en la tabla health_record.
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $healthrecord = HealthRecord::findOrFail($id);

        return $healthrecord;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos  en la tabla health_record.
     *
     * @param  HealthRecordCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(HealthRecordCreateRequest $request, $id)
    {
        $healthrecord = HealthRecord::findOrFail($id);
        $healthrecord->update($request->all());

        if ($healthrecord) {
            return response([
                'message' => 'el record de salud fue actualizado con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado en la base de datos  en la tabla health_record.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $healthrecord = HealthRecord::destroy($id);

        if ($healthrecord) {

            return response([
                'message' => 'El record de salud se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
  public function getAll(){
        $healthrecord = HealthRecord::all();
        return response()->json(['data'=>$healthrecord->toArray()]);
    }
}

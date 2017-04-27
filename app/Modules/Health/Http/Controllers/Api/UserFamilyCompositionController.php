<?php

namespace App\Modules\Health\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Health\Http\Requests\UserFamilyCompositionCreateRequest;
use App\Modules\Health\Models\UserFamilyComposition;
use Illuminate\Http\Request;

/**
 * UserFamilyCompositionController
 *
 * Retorna un listado de las historias clinicas.
 *
 * @return Response()
 */

class UserFamilyCompositionController extends Controller
{
    /**
     * index
     *
     * Retorna un listado de las familias.
     *
     * @return Response()
     */

    public function index()
    {

        $userfamilycomposition = UserFamilyComposition::paginate(10);
        return $userfamilycomposition;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos  el a tabla user_family_composition
     *
     * @param   UserFamilyCompositionCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(UserFamilyCompositionCreateRequest $request)
    {

        $userfamilycomposition = new UserFamilyComposition();
        $userfamilycomposition->create($request->all());

        return response([
            'message' => 'la Composicion de la familia de usuarios  fue creada con exito',
        ], 200);
    }

    /**
     * show
     *
     * muestra un dato de la tabla tabla user_family_composition
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $userfamilycomposition = UserFamilyComposition::findOrFail($id);

        return $userfamilycomposition;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la    tabla tabla user_family_composition.
     *
     * @param  UserFamilyCompositionCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(UserFamilyCompositionCreateRequest $request, $id)
    {
        $userfamilycomposition = UserFamilyComposition::findOrFail($id);
        $userfamilycomposition->update($request->all());

        if ($userfamilycomposition) {
            return response([
                'message' => 'la Composicion de la familia de usuarios fue actualizada con exito',
            ], 200);
        }

    }

    /**
     * destroy
     *
     * Remueve el campo especificado de la base de datos en la tabla tabla user_family_composition.
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $userfamilycomposition = UserFamilyComposition::destroy($id);

        if ($userfamilycomposition) {

            return response([
                'message' => 'la Composicion de la familia de usuarios eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 401);
    }
}

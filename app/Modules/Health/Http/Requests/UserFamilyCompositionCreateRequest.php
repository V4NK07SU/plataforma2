<?php

namespace App\Modules\Health\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @resource UserFamilyCompositionCreateRequest
 *
 * Request para filtrar la información.
 *
 * @author Danny Rojas Reyes <afarable-1997@hotmail.com>
 */

class UserFamilyCompositionCreateRequest extends FormRequest
{

    /**
     * authorize
     *
     * Determina si el usuario esta autorizado.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * rules
     *
     * Validaciones para el request.
     *
     * @return array
     */

    public function rules()
    {
        return [

            'user_id'      => 'numeric|required|exists:users,id',
            'first_name'   => 'string|required|max:128',
            'last_name'    => 'string|required|max:128',
            'relationship' => 'string|required|max:128',
            'occupation'   => 'string|required|max:128',
            'address'      => 'string|required|max:255',
            'phone'        => 'string|required|max:128',
        ];
    }
    /**
     * response
     *
     * Respuesta en formato JSON SI existen errores en el request
     *
     * @param  array  $errors
     *
     * @return JSON response()
     */

    public function response(array $errors)
    {
        return response([
            'message' => 'El formulario contiene errores',
            'errors'  => $errors,
        ], 422);
    }
}

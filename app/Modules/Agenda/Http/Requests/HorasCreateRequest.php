<?php

namespace App\Modules\Agenda\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 *@resource HorasCreateRequest
 *
 *Request para validacion
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class HorasCreateRequest extends FormRequest
{
    /**
     *authorize
     *
     * Determina si el usuario esta autorizado para hacer este request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     *
     * Rules
     *
     * Retorna un array con los campos a validar
     * @param   $[empty] [empty]
     * @return  Array()
     */

    public function rules()
    {
        return [

            'ends_at'  => 'required',
            'start_at' => 'required',
        ];
    }

    /**
     *
     * responses
     *
     * Retorna en formato JSON, si hay errores en la validación
     * @param   array(), $errors
     * @return  Array()
     */

    public function response(array $errors)
    {
        return response([
            'message' => 'El formulario contiene errores',
            'errors'  => $errors,
        ], 422);
    }
}

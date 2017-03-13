<?php

namespace App\Modules\Agenda\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 *@resource DiaCreateRequest
 *
 *Request para validacion
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class DiaCreateRequest extends FormRequest
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
     * rules
     *
     * Toma las reglas de valudación para aplicar a los request.
     *
     * @return array
     */
    public function rules()
    {

        return [

            'title' => 'required|string|min:2',

        ];

    }
    /**
     * Respuesta en formato JSON SI existen errores en el request
     */
    public function response(array $errors)
    {
        return response([
            'message' => 'El formulario contiene errores',
            'errors'  => $errors,
        ], 422);
    }
}

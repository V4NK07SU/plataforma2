<?php

namespace App\Modules\Agenda\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 *@resource CollaboratorGoalCreateRequest
 *
 *Request para validacion
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class CollaboratorGoalCreateRequest extends FormRequest
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
            'user_id'     => 'required|numeric',
            'service_id'  => 'required|numeric',
            'period_id'   => 'required|numeric',
            'fullfilment' => 'required',
            'efficacy'    => 'required',

        ];
    }
    /**
     * Respuesta en formato JSON SI existen errores en el request
     */
    public function response(array $errors)
    {
        return response([
            'message' => 'esto contiene errores',
            'errors'  => $errors,

        ], 422
        );
    }
}

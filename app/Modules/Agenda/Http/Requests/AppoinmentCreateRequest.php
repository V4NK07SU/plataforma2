<?php

namespace App\Modules\Agenda\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 *@resource AppoinmentCreateRequest
 *
 *Request para validacion
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class AppoinmentCreateRequest extends FormRequest
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
            'user_id'          => 'required',
            'agenda_id'        => 'required',
            'reason'           => 'required|string',
            'accepted_at'      => 'required|date',
            'start_at'         => 'required|date',
            'ends_at'          => 'required|date',
            'accomplished_at'  => 'required|date',
            'observations'     => 'required|string',
            'risk_variable_id' => 'required',
            'risk_value'       => 'required|string',
            'canceled_by'      => 'required|numeric',

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

<?php

namespace App\Modules\Agenda\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
/**
 *@resource ScheduleCreateRequest
 *
 *Request para validacion
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class ScheduleCreateRequest extends FormRequest
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
            //
        ];
    }
}

<?php

namespace App\Modules\Polls\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @resource PollTypeCreateRequest
 *
 * Request para validacion de la creacion de un PollUserCreateRequest
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class PollUserCreateRequest extends FormRequest
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
            'first_name' => 'required|max:255',
            'last_name'  => 'required|max:255',
            'email'      => 'required|email|max:255', //|unique:users
            'password'   => 'required|min:3',
        ];
    }
}

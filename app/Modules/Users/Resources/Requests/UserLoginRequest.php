<?php

namespace App\Modules\Users\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserLoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'username' => 'required|min:5|max:32',
            'password' => 'required|min:5|max:32'
        ];
    }

    /**
     * Respuesta en formato JSON si es que existen errores de validación
     *
     * @param  array  $errors
     *
     * @return Response
     */

    public function response(array $errors)
    {
        return response([
            'message' => 'El formulario contiene errores!',
            'errors'  => $errors,
        ], 422);
    }
}

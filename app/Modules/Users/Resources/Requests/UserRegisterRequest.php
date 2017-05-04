<?php

namespace App\Modules\Users\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
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
            'first_name' => 'required|min:5|max:32',
            'last_name' => 'required|min:5|max:32',
            'email' => [
                'required',
                'email',
                'unique:users,email'
            ],
            'uid' => [
                'required',
                'numeric',
                'min:5',
                'unique:users,email'
            ]
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

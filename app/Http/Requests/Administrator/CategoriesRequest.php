<?php

namespace App\Http\Requests\Administrator;

use Illuminate\Http\Response;
use App\Helpers\ResponseHelper;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CategoriesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'title' => 'required|string',
            'description' => 'required|string',
        ];

        // Jika ada file yang diunggah (misalnya pada operasi update)
        if ($this->isMethod('put')) {
            $rules['image'] = 'file|mimes:jpeg,png,jpg|max:2048'; // Max size in kilobytes  2 mb
        } else {
            $rules['image'] = 'required|file|mimes:jpeg,png,jpg|max:2048'; // Max size in kilobytes  2 mb
        }

        return $rules;
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(ResponseHelper::custome(['status' => false, 'message' => 'Validation errors', 'error' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY));
    }
}

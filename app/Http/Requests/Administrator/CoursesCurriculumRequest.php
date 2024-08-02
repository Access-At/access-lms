<?php

namespace App\Http\Requests\Administrator;

use Illuminate\Http\Response;
use App\Helpers\ResponseHelper;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class CoursesCurriculumRequest extends FormRequest
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
            'title' => 'required',  
        ];

        if ($this->isMethod('post')) {
            $rules['title'] = 'required';
        }

        if ($this->isMethod('put') || $this->isMethod('patch')) {
            $rules['title'] = 'required';
        }

        return $rules;
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(ResponseHelper::custome(['status' => false, 'message' => 'Validation errors', 'error' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY));
    }
}

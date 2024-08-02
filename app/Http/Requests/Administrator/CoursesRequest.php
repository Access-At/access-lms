<?php

namespace App\Http\Requests\Administrator;

use Illuminate\Http\Response;
use App\Helpers\ResponseHelper;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CoursesRequest extends FormRequest
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
            'short_desc' => 'nullable',
            'full_desc' => 'nullable',
            'start_date' => 'required',
            'end_date' => 'required',
            'level' => 'required|in:mudah,menengah,profesional',
            'status' => 'required|in:draft,publish',
            'price' => 'required',
            'isPaid' => 'required',
            'batch_id' => 'required',
            'category_id' => 'required',
        ];

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

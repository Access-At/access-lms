<?php

namespace App\Helpers;

use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;

class ResponseHelper
{
    /**
     * Response array
     *
     * @var array
     */
    private static $response = [
        'status' => true,
        'message' => '',
    ];

    /**
     * Format Success Response
     *
     * @param  mixed|null  $data  Response data
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function success(
        $data = null,
        $message = null ?? 'OK',
        $status = true,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_OK
        );
    }

    /**
     * Format Success Response
     *
     * @param  mixed|null  $data  Response data
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function created(
        $data = null,
        $message = null ?? 'Created',
        $status = true,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_CREATED
        );
    }

    /**
     * Format Success Response
     *
     * @param  mixed|null  $data  Response data
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function noContent(
        $data = null,
        $message = null ?? 'No Content',
        $status = true,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_NO_CONTENT
        );
    }

    /**
     * Format Error Response
     *
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function error(
        $data = null,
        $message = null ?? 'Bad Request',
        $status = false,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_BAD_REQUEST
        );
    }

    /**
     * Format Error Response
     *
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function unAuthenticated(
        $data = null,
        $message = null ?? 'Unauthenticated',
        $status = false,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_UNAUTHORIZED
        );
    }

    /**
     * Format Error Response
     *
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function forbidden(
        $data = null,
        $message = null ?? 'Forbidden',
        $status = false,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_FORBIDDEN
        );
    }

    /**
     * Format Error Response
     *
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function notFound(
        $data = null,
        $message = null ?? 'Not Found',
        $status = false,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_NOT_FOUND
        );
    }

    /**
     * Format Error Response
     *
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function methodNotAllowed(
        $data = null,
        $message = null ?? 'Method Not Allowed',
        $status = false,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_METHOD_NOT_ALLOWED
        );
    }

    /**
     * Format Error Response
     *
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     * @param  array|string|null  $error  Response error
     */
    public static function failedValidation(
        $data = null,
        $message = null ?? 'Unprocessable Entity',
        $status = false,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_UNPROCESSABLE_ENTITY
        );
    }

    /**
     * Format Internal Server Error
     *
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function internalServerError(
        $data = null,
        $message = null ?? 'Internal Server Error',
        $status = false,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_INTERNAL_SERVER_ERROR
        );
    }

    /**
     * Format Too Many Request
     *
     * @param  string|null  $message  Response message
     * @param  bool  $status  Response status
     */
    public static function toManyRequestValidation(
        $data = null,
        $message = null ?? 'Too Many Request',
        $status = false,
    ): JsonResponse {
        return response()->json(
            self::prepareResponse($data, $message, $status),
            Response::HTTP_TOO_MANY_REQUESTS
        );
    }

    /**
     * Format Internal Server Error
     *
     * @param  array|null  $data  Response message
     * @param  Response  $response  Response Response
     */
    public static function custome(
        $data,
        $response
    ): JsonResponse {
        return response()->json(
            $data,
            $response
        );
    }

    /**
     * Prepare Response
     *
     * @param  mixed|null  $data  Response data
     * @param  string  $message  Response message
     * @param  bool  $status  Response status
     * @param  mixed|null  $error  Response error
     */
    private static function prepareResponse($data, $message, $status): array
    {
        $response = self::$response;
        $response['status'] = $status;
        $response['message'] = $message;

        if ($data !== null) {
            $response['data'] = $data;
        }

        return $response;
    }
}

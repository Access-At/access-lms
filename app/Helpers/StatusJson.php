<?php

namespace App\Helpers;

use App\Helpers\ResponseHelper;
use Illuminate\Http\JsonResponse;

class StatusJson {

    public static function success( $message = 'success', $data) : JsonResponse {
        return response()->json([
            'status' => true,
            'message' => $message,
            'data' => $data
        ], ResponseHelper::HTTP_OK);
    }

    public static function error( $message = 'error', $data)  : JsonResponse {
        return response()->json([
            'status' => false,
            'message' => $message,
            'data' => $data
        ], ResponseHelper::HTTP_INTERNAL_SERVER_ERROR);
    }

    public static function notFound( $message = 'not found') : JsonResponse {
        return response()->json([
            'status' => false,
            'message' => $message,
        ], ResponseHelper::HTTP_NOT_FOUND);
    }

    public static function unauthorized( $message = '') : JsonResponse {
        return response()->json([
            'status' => false,
            'message' => $message,
        ], ResponseHelper::HTTP_UNAUTHORIZED);
    }

    public static function forbidden($message = 'forbidden') : JsonResponse {
        return response()->json([
            'status' => false,
            'message' => $message,
        ], ResponseHelper::HTTP_FORBIDDEN);
    }

    public static function notAcceptable( $message = '', $data = null)  : JsonResponse{
        return response()->json([
            'status' => false,
            'message' => $message,
            'data' => $data
        ], ResponseHelper::HTTP_NOT_ACCEPTABLE);
    }

    public static function internalServerError($message = 'Internal Server Error') : JsonResponse {
        return response()->json([
            'status' => false,
            'message' => $message,
        ], ResponseHelper::HTTP_INTERNAL_SERVER_ERROR);
    }

    public static function badRequest($message = '') : JsonResponse {
        return response()->json([
            'status' => false,
            'message' => $message,
        ], ResponseHelper::HTTP_BAD_REQUEST);
    }

    public static function authWithToken($user, $token) : JsonResponse {
        return response()->json([
            'success' => true,
            'user'    => $user,
            'token'   => $token,  
        ], ResponseHelper::HTTP_OK);
    }

    public static function validatorError($validator) : JsonResponse {
        return response()->json([
            'success' => false,
            'errors'  => $validator
        ], ResponseHelper::HTTP_OK);
    }

}
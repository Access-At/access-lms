<?php

namespace App\Http\Controllers\Administrator;

use Illuminate\Http\JsonResponse;
use App\Http\Requests\AuthRequest;
use App\Http\Controllers\Controller;
use App\Services\Administrator\AuthService;

class AuthController extends Controller
{
    public function login(AuthRequest $request): JsonResponse
    {
        return AuthService::login($request);
    }

    public function getUser(): JsonResponse
    {
        return AuthService::me();
    }

    public function refreshToken(): JsonResponse
    {
        return AuthService::refresh();
    }

    public function logout(): JsonResponse
    {
        return AuthService::logout();
    }
}

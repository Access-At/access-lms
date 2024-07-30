<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Requests\AuthRequest;
use App\Http\Controllers\Controller;
use App\Services\Administrator\AuthService;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(
        AuthService $authService
    ) {
        $this->authService = $authService;
    }

    public function login(AuthRequest $request): JsonResponse
    {
        return $this->authService->login($request->only('email', 'password'));
    }

    public function getUser(): JsonResponse
    {
        return $this->authService->me();
    }

    public function refreshToken(): JsonResponse
    {
        return $this->authService->refresh();
    }

    public function logout(): JsonResponse
    {
        return $this->authService->logout();
    }
}

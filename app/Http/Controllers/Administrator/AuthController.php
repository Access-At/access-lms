<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Requests\AuthRequest;
use App\Http\Controllers\Controller;
use App\Services\Administrator\AuthService;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(
        AuthService $authService
    ) {
        $this->authService = $authService;
    }

    public function login(AuthRequest $request)
    {
        return $this->authService->login($request->only('email', 'password'));
    }

    public function getUser()
    {
        return $this->authService->me();
    }

    public function refreshToken()
    {
        return $this->authService->refresh();
    }

    public function logout()
    {
        return $this->authService->logout();
    }
}

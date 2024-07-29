<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Services\Administrator\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(
        AuthService $authService
    )
    {
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

    // public function refreshToken(Request $request)
    // {
    //     return $this->authRepository->refreshToken($request);
    // }

    public function logout()
    {
        return $this->authService->logout();
    }
        
}

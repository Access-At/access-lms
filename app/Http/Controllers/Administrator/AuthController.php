<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Repository\Adminstrator\AuthRepository;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $authRepository;
    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
        
    }
    public function login(Request $request)
    {
        return $this->authRepository->loginUser($request);
    }

    public function getUser()
    {
        return $this->authRepository->getUser();
    }

    public function refreshToken(Request $request)
    {
        return $this->authRepository->refreshToken($request);
    }

    public function logout()
    {
        return $this->authRepository->logout();
    }
        
}
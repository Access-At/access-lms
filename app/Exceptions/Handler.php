<?php

namespace App\Exceptions;

use Throwable;
use App\Helpers\ResponseHelper;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Auth\AuthenticationException;

class Handler extends ExceptionHandler
{
    protected $dontReport = [
        CustomException::class,
    ];
    
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    protected function unauthenticated($request, AuthenticationException $exception)
    {
        return ResponseHelper::unAuthenticated();
    }

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        // $this->reportable(function (Throwable $e) {
        //     //
        // });

        $this->renderable(function (CustomException $e) {
            return ResponseHelper::custome(
                ['status' => false, 'message' => $e->getMessage()],
                $e->getCode()
            );
        });
    
    }

    /**
     * Render an exception into an HTTP response.
     */
    public function render($request, Throwable $exception): JsonResponse
    {
        if ($exception instanceof ThrottleRequestsException) {
            return ResponseHelper::toManyRequestValidation(null, 'Terlalu banyak percobaan. Silakan coba lagi nanti.');
        }

        return parent::render($request, $exception);
    }
}

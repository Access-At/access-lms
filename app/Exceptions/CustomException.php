<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;

class CustomException extends Exception
{
    public static function notFound($title): static
    {
        return new static("data {$title} tidak ditemukan", Response::HTTP_NOT_FOUND);
    }
}

<?php

namespace App\Helpers;

class FormatterRupiah
{
    public static function format($value)
    {
        return number_format($value, 0, ',', '.');
    }

    public static function unformat($value)
    {
        return str_replace('.', '', $value);
    }
}

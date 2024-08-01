<?php


namespace App\Contracts;


interface BatchesInterface
{
    // getter
    public function getUuid() : string;
    public function getTitle(): string;

    // setter
    public function setUuid(string $uuid): BatchesInterface;
    public function setTitle(string $title): BatchesInterface;
}
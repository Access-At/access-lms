<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Services\Administrator\BatchesService;
use App\Http\Requests\Administrator\BatchesRequest;

class BatchesController extends Controller
{
    public function index()
    {

        return BatchesService::getAll();
    }

    public function getTrash()
    {
        return BatchesService::getAllTrashed();
    }

    public function store(BatchesRequest $request)
    {
        return BatchesService::insert($request);
    }

    public function show(string $id)
    {
        return BatchesService::findById($id);
    }

    public function update(string $id, BatchesRequest $request)
    {
        return BatchesService::update($id, $request);
    }

    public function trash(string $id)
    {
        return BatchesService::deleteSoft($id);
    }

    public function restore(string $id)
    {
        return BatchesService::restoreSoft($id);
    }

    public function destroy(string $id)
    {
        return BatchesService::delete($id);
    }
}

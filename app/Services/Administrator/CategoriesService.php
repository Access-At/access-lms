<?php

namespace App\Services\Administrator;

use App\Exceptions\CustomException;
use App\Helpers\ResponseHelper;
use App\Repository\Administrator\CategoriesRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoriesService
{
    public function getAllCategory(): JsonResponse
    {
        try {
            $data = CategoriesRepository::getAll();
            return ResponseHelper::success($data);
        } catch (\Throwable $th) {
            return $this->handleError($th);
        }
    }

    public function findById(string $id): JsonResponse
    {
        try {
            $data = CategoriesRepository::findById($id);
            return ResponseHelper::success($data);
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('kategori');
        } catch (\Throwable $th) {
            return $this->handleError($th);
        }
    }

    public function insert(Request $request): JsonResponse
    {
        try {
            $file = $request->file('image');
            $data = $this->processImage($request, $file);
            $category = CategoriesRepository::insert($data);
            return ResponseHelper::created($category, 'Kategori berhasil dibuat', 201);
        } catch (\Throwable $th) {
            return $this->handleError($th);
        }
    }

    public function update(string $id, Request $request): JsonResponse
    {
        try {
            $file = $request->file('image');
            $data = $this->processImage($request, $file);

            // Update category data
            CategoriesRepository::update($id, $data);

            return ResponseHelper::success(null, 'Kategori berhasil diperbarui');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('kategori');
        } catch (\Throwable $th) {
            return $this->handleError($th);
        }
    }

    public function delete($id): JsonResponse
    {
        try {
            CategoriesRepository::delete($id);
            return ResponseHelper::noContent(null, 'Kategori berhasil dihapus');
        } catch (ModelNotFoundException $e) {
            throw CustomException::notFound('kategori');
        } catch (\Throwable $th) {
            return $this->handleError($th);
        }
    }

    /**
     * Handle errors uniformly.
     *
     * @param \Throwable $th
     * @return JsonResponse
     */
    private function handleError(\Throwable $th): JsonResponse
    {
        return ResponseHelper::internalServerError(null, $th->getMessage());
    }

    /**
     * Process image upload and return data with imageUrl.
     *
     * @param Request $request
     * @param $file
     * @return array
     */
    private function processImage(Request $request, $file): array
    {
        // Validate if image file exists
        if (!$file) {
            throw new \InvalidArgumentException('File gambar tidak ditemukan');
        }

        // Generate a unique file name
        $filename = 'Image_LMS_' . uniqid() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('uploads', $filename, 'public');

        // Optionally, you can add more validations here if needed

        // Prepare data with imageUrl
        $data = $request->except(['image']);
        $data["imageUrl"] = $path;

        return $data;
    }
}

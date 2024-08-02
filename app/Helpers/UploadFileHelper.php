<?php

namespace App\Helpers;

use Exception;
use Illuminate\Http\UploadedFile;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;

class UploadFileHelper
{
    public static function uploadFile(UploadedFile $file, string $type, ?string $id = null): array
    {
        $data = [];

        switch ($type) {
            case 'image':
                $data = self::processImage($file, $id);
                break;
            case 'document':
                $data = self::processDocument($file, $id);
                break;
            case 'video/gif':
                $data = self::proccessVideoGif($file, $id);
                break;
            default:
                throw new Exception('Unsupported file type.');
        }

        return $data;
    }

    private static function processImage(UploadedFile $file, ?string $id = null): array
    {
        // Create new manager instance
        $manager = new ImageManager(new Driver);

        // Generate a unique file name
        $filename = 'Image_LMS_' . hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

        // Read image from filesystem then compress it
        $image = $manager->make($file->getPathname());
        $image->resize(300, 300)->encode('jpg', 80);

        // Save the image
        $path = "uploads/images/{$filename}";
        Storage::disk('public')->put($path, (string) $image);

        // Handle existing file deletion if necessary
        self::removeOldFile($id, 'image', 'ImageRepository');

        return ['filePath' => $path];
    }

    private static function processDocument(UploadedFile $file, ?string $id = null): array
    {
        // Generate a unique file name
        $filename = 'Document_LMS_' . hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

        // Save the document
        $path = "uploads/documents/{$filename}";
        Storage::disk('public')->putFileAs('uploads/documents', $file, $filename);

        // Handle existing file deletion if necessary
        self::removeOldFile($id, 'document', 'DocumentRepository');

        return ['filePath' => $path];
    }

    private static function proccessVideoGif(UploadedFile $file, ?string $id = null): array
    {
        $filename = 'Video_LMS_' . hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

        $path = "uploads/videos/{$filename}";
        Storage::disk('public')->putFileAs('uploads/videos', $file, $filename);

        // Handle existing file deletion if necessary
        self::removeOldFile($id, 'video/gif', 'VideoRepository');

        return ['filePath' => $path];

    }

    private static function removeOldFile(?string $id, string $type, string $repositoryClass): void
    {
        if ($id) {
            $existingFile = null;

            // Dynamically resolve repository
            $repository = app()->make($repositoryClass);

            switch ($type) {
                case 'image':
                    $existingFile = $repository->getImageById($id);
                    break;
                case 'document':
                    $existingFile = $repository->getDocumentById($id);
                    break;
            }

            if ($existingFile && isset($existingFile->filePath)) {
                Storage::disk('public')->delete($existingFile->filePath);
            }
        }
    }
}

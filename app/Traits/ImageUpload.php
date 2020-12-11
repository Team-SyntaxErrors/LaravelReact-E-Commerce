<?php
namespace App\Traits;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

trait ImageUpload
{
    public function VerifyStore(Request $request, $field_name, $folder_name, $height = 300, $width = 300)
    {
        $position = strpos($request->$field_name, ";");
        $sub_str = substr($request->$field_name, 0, $position);
        $extension = explode("/", $sub_str);
        $allowed = Helper::ImageExtension($extension[1]);
        if ($allowed == "Allowed") {
            $upload_path = "backend_assets/images/" . $folder_name . "/" . time() . "." . $extension[1];
            $image_upload = Image::make($request->$field_name)->resize($height, $width);
            $image_upload->save($upload_path);
            return $upload_path;
        } else {
            $status = 400;
            $response = [
                'errors' => ['project_logo_ext' => $allowed],
                'status' => 400,
            ];
            return response()->json($response, $status);
        }
    }
}

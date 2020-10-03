<?php

namespace App\Traits;

use Illuminate\Http\Response;

trait ApiResponse
{
    protected function successResponse($data, $message = null, $code = Response::HTTP_OK)
    {
        return response()->json([
            'status'  => 'Success',
            'message' => $message,
            "code"    => $code,
            'data'    => $data,
        ], $code);
    }

    protected function errorResponse($message = null, $code = Response::HTTP_BAD_REQUEST)
    {
        return response()->json([
            'status'  => 'Error',
            'message' => $message,
            "code"    => $code,
            'data'    => null,
        ], $code);
    }
}

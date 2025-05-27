<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SopirCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public static $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nama_sopir' => $this->nama_sopir,
            'alamat_sopir' => $this->alamat_sopir,
            'no_telp' => $this->no_telp,
            'kode_sopir' => $this->kode_sopir,
            'created_at' => $this->created_at,
        ];

    }
}

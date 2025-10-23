<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResourceShared extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'nim' => $this->nim,
            'name' => $this->name,
            'email' => $this->email,
            'line_id' => $this->line_id,
            'whatsapp_id' => $this->whatsapp_id,
            'status' => $this->status,
            'kelompok' => $this->kelompok,
            'kelulusan' => $this->kelulusan,
            'alasan_tidak_lulus' => $this->alasan_tidak_lulus,
            'twibbon' => $this->twibbon,
            'nilai_alprog' => $this->nilai_alprog,
            'nilai_jarkom' => $this->nilai_jarkom,
            'nilai_basdat' => $this->nilai_basdat,
            'nilai_gemastik' => $this->nilai_gemastik,
            'nilai_kehadiran' => $this->nilai_kehadiran,
            'nilai_akhir' => $this->nilai_akhir,
        ];
    }
}

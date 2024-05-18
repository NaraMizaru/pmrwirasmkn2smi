<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Anggota;
use App\Models\Bidang;
use App\Models\Kelas;
use App\Models\Unit;
use App\Models\Pengurus;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Dompdf\Dompdf;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function dashboard(): View
    {
        $user = Auth::user();
        if ($user->role == 'admin') {
            $anggota = Anggota::orderBy('kelas_id', 'asc')->get();
            $pengurus = Pengurus::all();
            $pengurusCount = $pengurus->count();
            $anggotaCount = $anggota->count();
            $tidakPengkacuanCount = Anggota::where('status', 'tidak pengkacuan')->count();
            $pengkacuanCount = Anggota::where('status', 'pengkacuan')->count();

            return view('auth.admin.dashboard', compact([
                'user',
                'anggota',
                'pengurusCount',
                'anggotaCount',
                'pengkacuanCount',
                'tidakPengkacuanCount'
            ]), ['type_menu' => 'dashboard']);
        } else if ($user->role == 'anggota') {
            $anggota = Anggota::where('user_id', $user->id)->first();
            $kelas = Kelas::all();
            $unit = Unit::all();
            $bidang = Bidang::all();

            return view('auth.anggota.dashboard', compact([
                'anggota',
                'kelas',
                'unit',
                'bidang'
            ]), ['type_menu' => 'dashboard']);
        }
    }

    public function detailIndex($username)
    {
        $user = User::where('username', $username)->first();
        $anggota = Anggota::where('user_id', $user->id)->first();
        $kelas = Kelas::all();
        $unit = Unit::all();
        $bidang = Bidang::all();

        return view('auth.admin.detail', compact([
            'user',
            'anggota',
            'kelas',
            'unit',
            'bidang'
        ]), ['type_menu' => '']);
    }


    public function editIndex($username)
    {
        $user = User::where('username', $username)->first();
        $anggota = Anggota::where('user_id', $user->id)->first();
        $kelas = Kelas::all();
        $unit = Unit::all();
        $bidang = Bidang::all();

        return view('auth.admin.edit', compact([
            'user',
            'anggota',
            'kelas',
            'unit',
            'bidang'
        ]), ['type_menu' => '']);
    }

    public function edit(Request $request, $username)
    {
        $user = User::where('username', $username)->first();
        $anggota = Anggota::where('user_id', $user->id)->first();

        $fields = $request->validate([
            'fullname' => 'required',
            'nis' => 'nullable',
            'username' => 'required',
            'email' => 'email',
            'no_telp' => 'required',
            'kelas_id' => 'required',
            'bidang_id' => 'required',
            'unit_id' => 'required',
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg'
        ]);

        if (!$fields) {
            return redirect()->back()->with('status', 'Terjadi kesalahan');
        }

        $user->username = $fields['username'];
        $user->email = $fields['email'];
        $user->no_telp = $fields['no_telp'];

        if ($request->has('profile_image')) {
            $imagePath = $request->file('profile_image')->store('profile_image');
            $user->profile_image = $imagePath;
        } else {
            unset($fields['profile_image']);
        }

        $user->save();
        $anggota->kelas_id = $fields['kelas_id'];
        $anggota->nis = $fields['nis'];
        $anggota->bidang_id = $fields['bidang_id'];
        $anggota->unit_id = $fields['unit_id'];
        $anggota->save();

        return redirect()->route('admin.dashboard')->with('status', 'Data anggota berhasil di ubah');
    }

    public function deleteIndex($username)
    {
        $user = User::where('username', $username)->first();
        $user->delete();

        return redirect()->back()->with('status', 'Anggota berhasil di hapus');
    }

    public function upgradeStatus(Request $request, $username)
    {
        $user = User::where('username', $username)->first();
        $anggota = Anggota::where('user_id', $user->id)->first();

        $anggota->status = 'pengkacuan';
        $anggota->save();

        return redirect()->back()->with('status', 'Anggota berhasil di naikan');
    }

    public function downloadPdf()
    {
        set_time_limit(300);
        $anggota = Anggota::orderBy('kelas_id', 'asc')->get();
        // $data = [
        //     'anggota' => $anggota
        // ];
        $pdf = Pdf::loadView('pdf.anggota', ['anggota' => $anggota]);
        return $pdf->download('anggota.pdf');
    }
}

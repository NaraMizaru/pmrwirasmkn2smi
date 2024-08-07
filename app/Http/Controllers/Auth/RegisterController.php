<?php

namespace App\Http\Controllers\Auth;

use App\Models\Anggota;
use App\Http\Controllers\Controller;
use App\Models\Bidang;
use App\Models\Kelas;
use App\Models\Setting;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;

class RegisterController extends Controller
{
    public function index(Request $request): View
    {
        
        $kelas = Kelas::where('name', 'like', '%10%')->get();
        $bidang = Bidang::all();
        
        $setting = Setting::where('name', 'register')->first();
        if ($setting->value == 'aktif') {
            if ($request->query('status') == 'registered' && session('registered')) {
                $link = Setting::where('name', 'link grup whatsapp')->first();
                session()->forget('registered');
                return view('auth.register-success', compact('link'));
            }

            return view('auth.register', compact('kelas', 'bidang'));
        } else if ($setting->value == 'nonaktif') {
            abort(403);
        } else {
            abort(404);
        }
    }

    public function authRegister(Request $request)
    {
        $fields = Validator::make($request->all(), [
            'fullname' => 'required',
            'nis' => 'nullable|unique:anggotas,nis',
            'username' => 'required|unique:users',
            'password' => 'required',
            'email' => 'email',
            'no_telp' => 'required',
            'kelas_id' => 'required',
            'bidang_id' => 'required',
        ]);
        // dd($unitId);
        
        if ($fields->fails()) {
            return redirect()->back()->withErrors($fields->errors())->withInput($request->all());
        }
        
        $user = new User([
            'fullname' => $request->username,
            'username' => $request->username,
            'password' => $request->password,
            'email' => $request->email,
            'no_telp' => $request->no_telp,
        ]);
        
        $unitId = Unit::inRandomOrder()->value('id');
        $user->save();
        if ($user->save()) {
            $anggota = new Anggota([
                'user_id' => $user->id,
                'nis' => $request->nis,
                'kelas_id' => $request->kelas_id,
                'bidang_id' => $request->bidang_id,
                'unit_id' => $unitId
            ]);

            $anggota->save();
            if ($anggota->save()) {
                session(['registered' => true]);

                return redirect()->route('register', ['status' => 'registered'])->with('success', 'Pendaftaran berhasil');
            }
        }
    }
}

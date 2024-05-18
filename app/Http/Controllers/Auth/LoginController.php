<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class LoginController extends Controller
{
    public function index(Request $request)
    {
        $isAdminLogin = $request->has('admin');
        $isAdmin = $isAdminLogin ? 'admin' : '';

        $check = Auth::check();
        if ($check) {
            if (Auth::user()->remember_token) {
                return redirect()->route('admin.dashboard');
            }
        }

        return view('auth.login', compact('isAdmin'));
    }

    public function authLogin(Request $request): RedirectResponse
    {
        // dd($request->has('admin'));
        $fields = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $auth = Auth::attempt($fields, $request->has('remember'));
        if ($fields['username'] == 'admin' && $fields['password'] == 'admin' && $request->has('admin')) {
            if ($auth) {
                return redirect()->route('admin.dashboard');
            }
        } else if ($fields['username'] == 'admin' && $fields['password'] == 'admin' && !$request->has('admin')) {
            return redirect()->back()->with('error', 'Username atau password salah!');
        }

        if ($auth) {
            return redirect()->route('anggota.dashboard');
        } else {
            return redirect()->back()->with('error', 'Username atau password salah!');
        }
    }
}

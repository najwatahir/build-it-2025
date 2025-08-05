<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminTwibbonsController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $role = auth()->user()->getRoleNames();

        $usersWithTwibbon = User::whereNotNull('twibbon')
                                ->where('twibbon', '!=', '')
                                ->select('id', 'name', 'nim', 'twibbon')
                                ->get();

        return Inertia::render('Admin/Twibbons', [
            'user' => $user,
            'role' => $role,
            'twibbons' => $usersWithTwibbon
        ]);
    }
}

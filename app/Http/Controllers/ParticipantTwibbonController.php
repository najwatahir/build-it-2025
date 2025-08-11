<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class ParticipantTwibbonController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $role = $user->getRoleNames();

        return Inertia::render('Participant/Twibbon', [
            'user' => $user,
            'role' => $role
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'twibbon' => 'required|string|max:255|url',
        ]);

        $user = auth()->user();
        $user->update([
            'twibbon' => $request->twibbon,
        ]);

        return back()->with('success', 'Link twibbon berhasil diperbarui awokawok.');
    }
}

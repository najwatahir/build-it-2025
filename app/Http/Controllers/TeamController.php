<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TeamController extends Controller
{
    public function index()
    {
    $user = auth()->user();
    $team = $user->team()->with('members')->first();

    return Inertia::render('Participant/Team', [ 
        'team' => $team,
        'user' => $user
    ]);
    }

    public function create()
    {
        $user = auth()->user();

        return Inertia::render('Participant/CreateTeam', [ 
            'user' => $user
        ]);
    }
    
    public function joinView()
    {
        $user = auth()->user();

        return Inertia::render('Participant/JoinTeam', [ 
            'user' => $user
        ]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        if ($user->team()->exists()) {
            return back()->with('error', 'Anda sudah tergabung dalam tim.');
        }

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $code = strtoupper(Str::random(6));

        $team = Team::create([
            'name' => $request->name,
            'code' => $code,
            'leader_id' => $user->id,
        ]);

        $team->members()->attach($user->id);
        return redirect()->back()->with('success', 'Tim berhasil dibuat dengan kode: ' . $code);
    }

    public function join(Request $request)
{
    $user = Auth::user();

    if ($user->team()->exists()) {
        return redirect()->route('participant.team')
            ->with('error', 'Anda sudah tergabung dalam tim.');
    }

    $request->validate([
        'code' => 'required|string|exists:teams,code',
    ]);

    $team = Team::where('code', $request->code)->first();

    if ($team->members()->count() >= 3) {
        return redirect()->route('participant.team')
            ->with('error', 'Tim sudah penuh (maksimal 3 anggota).');
    }

    $team->members()->attach($user->id);

    return redirect()->route('participant.team')
        ->with('success', 'Berhasil bergabung dengan tim.');
}



    public function leave()
    {
        $user = Auth::user();
        $team = $user->team()->first();

        if (!$team) {
            return back()->with('error', 'Anda tidak tergabung dalam tim manapun.');
        }

        if ($team->leader_id === $user->id) {
            $team->delete();
            return redirect()->back()->with('success', 'Tim berhasil dihapus.');
        } else {
            $team->members()->detach($user->id);
            return redirect()->back()->with('success', 'Berhasil keluar dari tim.');
        }
    }

    

}

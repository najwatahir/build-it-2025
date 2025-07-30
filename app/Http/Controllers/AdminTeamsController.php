<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class AdminTeamsController extends Controller
{
    /**
     * Display a listing of the teams.
     */
    public function index()
    {
        $user = auth()->user();
        $role = auth()->user()->getRoleNames();

        $teams = Team::with('leader', 'members')->get();

        return Inertia::render('Admin/Teams', compact('user', 'role', 'teams'));
    }

    /**
     * Update the specified team.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'token' => 'required|string|max:255',
            'leader_id' => 'required|exists:users,id',
        ]);

        $team = Team::findOrFail($id);

        $team->update([
            'name' => $request->name,
            'token' => $request->token,
            'leader_id' => $request->leader_id,
        ]);

        return to_route('teams.index');
    }

    /**
     * Remove the specified team.
     */
    public function destroy(string $id)
    {
        $team = Team::findOrFail($id);

        $team->delete();

        return to_route('teams.index');
    }
}

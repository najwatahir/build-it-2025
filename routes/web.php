<?php

use Inertia\Inertia;
use GuzzleHttp\Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdminSubmissionsController;
use App\Http\Controllers\AdminParticipantsController;
use App\Http\Controllers\ParticipantProfileController;
use App\Http\Controllers\ParticipantGraduationController;
use App\Http\Controllers\ParticipantSubmissionController;
use App\Http\Controllers\TeamController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render("Welcome", []);
})->name('Welcome');

Route::get('/modul/alprog', function () {
    return Inertia::render("Modul/Alprog", []);
})->name('Modul.Alprog');

Route::get('/modul/basisdata', function () {
    return Inertia::render("Modul/BasisData", []);
})->name('Modul.BasisData');

Route::get('/modul/jarkom', function () {
    return Inertia::render("Modul/Jarkom", []);
})->name('Modul.Jarkom');


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');

    Route::middleware('participant')->group(function () {
        Route::get('/profile', [ParticipantProfileController::class, 'index'])->middleware(['auth'])->name('participant.profile');
        Route::get('/edit-profile', [ParticipantProfileController::class, 'edit'])->middleware(['auth'])->name('participant.editprofile');
        Route::put('/edit-profile', [ParticipantProfileController::class, 'update'])->middleware(['auth'])->name('participant.updateprofile');
        Route::get('/participant-submissions', [ParticipantSubmissionController::class, 'index'])->middleware(['auth'])->name('participant.submissions');

        // Team
        Route::get('/participant-team', [TeamController::class, 'index'])->middleware(['auth'])->name('participant.team');
        Route::get('/participant-team/create', [TeamController::class, 'create'])->middleware(['auth'])->name('participant.team.create');
        Route::post('/participant-team/post', [TeamController::class, 'store'])->middleware(['auth'])->name('participant.team.store');
        Route::get('/participant-team/join', [TeamController::class, 'joinView'])->middleware(['auth'])->name('participant.team.joinView');
        Route::post('/participant-team/join', [TeamController::class, 'join'])->middleware(['auth'])->name('participant.team.join');
        Route::post('/participant-team/leave', [TeamController::class, 'leave'])->middleware(['auth'])->name('participant.team.leave');


        Route::get('/participant-graduation', [ParticipantGraduationController::class, 'index'])->middleware(['auth'])->name('participant.graduation');
        Route::put('/participant-submitalprog', [ParticipantSubmissionController::class, 'submitAlprog'])->middleware(['auth'])->name('participant.submitalprog');
        Route::put('/participant-submitbasis', [ParticipantSubmissionController::class, 'submitBasis'])->middleware(['auth'])->name('participant.submitbasis');
        Route::put('/participant-submitjarkom', [ParticipantSubmissionController::class, 'submitJarkom'])->middleware(['auth'])->name('participant.submitjarkom');
        Route::put('/participant-submitproposal', [ParticipantSubmissionController::class, 'submitProposal'])->middleware(['auth'])->name('participant.submitproposal');
    });

    Route::middleware('admin')->group(function () {
        Route::resource('participants', AdminParticipantsController::class)->middleware(['auth']);
        Route::resource('submissions', AdminSubmissionsController::class)->middleware(['auth']);
        Route::middleware(['auth', 'admin'])->put('/reset-password', [AdminParticipantsController::class, 'resetPassword'])->name('participants.resetPassword');
    });
});

Route::fallback(function () {
    return Inertia::render('not-found');
})->name('not-found');

require __DIR__ . '/auth.php';

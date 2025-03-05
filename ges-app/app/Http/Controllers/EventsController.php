<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Events;
use Symfony\Contracts\Service\Attribute\Required;

class EventsController extends Controller
{
    public function index()
    {
        $events = Events::all();
        return view('events', ['events' => $events]);
    }

    public function create()
    {
        return view('register-events');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nameAssociate' => 'required|string|max:255',
            'tableAssociate' => 'required|string|max:255',
            'typeEvent' => 'required|string|max:255',
            'dateEvent' => 'required|date',
            'progressEvent' => 'required|string|max:255',
            'emailAssociate' => 'required|email|max:255',
            'telephoneAssociate' => 'required|string|max:15',
            'Third' => 'required|boolean',
        ]);

        Events::create([
            'nameAssociate' => $request->nameAssociate,
            'tableAssociate' => $request->tableAssociate,
            'typeEvent' => $request->typeEvent,
            'dateEvent' => $request->dateEvent,
            'progressEvent' => $request->progressEvent,
            'emailAssociate' => $request->emailAssociate,
            'telephoneAssociate' => $request->telephoneAssociate,
            'Third' => $request->Third,
        ]);

        return redirect()->route('events')->with('success', 'Event registered successfully.');

    }
};

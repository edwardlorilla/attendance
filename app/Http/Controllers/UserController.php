<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(User::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
            ->search(request('search'))
            ->paginate());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = \App\Role::with('permissions')->get();
        $jobs = \App\Job::all();
        return response()->json(['roles' => $roles, 'jobs' => $jobs], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $request->id,
            'password' => 'string|min:6',
            'job_id' => 'required',
            'confirm_password' => 'same:password',
            'roles' => '',
        ]);
        if (trim($request->password) == '') {
            $input = $request->except('password');
        } else {
            $input['password'] = bcrypt($request->password);
        }
        $model = User::updateOrCreate(
            ['id' => $request->id],
            $input);
        if ($request->roles) {
            $model->syncRoles($input['roles']);
        }
        return response()->json($model, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $roles = \App\Role::all();
        $permissions = \App\Permission::all();
        $jobs = \App\Job::all();
        return response()->json(['user' => User::where('id', $user->id)->with('roles', 'permissions')->first()->makeHidden(['job', 'attendances']), 'roles' => $roles, 'permissions' => $permissions, 'jobs' => $jobs], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    public function attendances(User $user)
    {
        $currentMonth = date('m');
        $attendanceFunction = function ($query) use ($currentMonth) {
            $query->whereMonth('started_at', $currentMonth);
        };
        $attendance = User::whereId($user->id)->with(['attendances' => $attendanceFunction])->whereHas('attendances', $attendanceFunction)->first();

        return response()->json($attendance ? $attendance->makeHidden(['job', 'can', 'employee_pay', 'job_id', 'roles']) : []);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}

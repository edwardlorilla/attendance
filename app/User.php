<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Laratrust\Traits\LaratrustUserTrait;
use Nicolaslopezj\Searchable\SearchableTrait;
class User extends Authenticatable
{
    use LaratrustUserTrait, SearchableTrait, HasApiTokens,Notifiable;
    protected $appends = ['can', 'roles', 'total_timing', 'employee_pay'];
    protected $searchable = [
        'columns' => [
            'users.name' => 1,
            'users.email' => 2,
            ]
        ];
        /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'job_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function getRolesAttribute()
    {
        $roles = [];
        foreach (Role::all() as $role) {
            if (auth()->user()->hasRole($role->name)) {
                $roles[$role->name] = true;
            } else {
                $roles[$role->name] = false;
            }
        }
        return $roles;
    }
    public function getCanAttribute()
    {
        $permissions = [];
        foreach (Permission::all() as $permission) {
            if (auth()->user()->can($permission->name)) {
                $permissions[$permission->name] = true;
            } else {
                $permissions[$permission->name] = false;
            }
        }
        return $permissions;
    }
    public function job()
    {
        return $this->belongsTo(Job::class);
    }
    /*
     * * by default, add hours when stopped_at was not filled during previous day
     * * if not return 0
     * */
    public function addHours()
    {
        return 5;
    }
    public function attendances(){
        return $this->hasMany(Attendance::class);
    }
    public function getEmployeePayAttribute()
    {
        return $this->job ? ($this->total_timing * 0.0002777778) * (int)$this->job->standard_pay : 0;
    }

    public function getTotalTimingAttribute()
    {
        return $this->attendances ? $this->attendances->reduce(function ($total, Attendance $attendance) {
            return $total + $attendance->timing;
            }, 0) : 0;
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Attendance extends Model
{
    protected $appends = ['timing'];
    protected $fillable = ['started_at', 'stopped_at'];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function getTimingAttribute()
    {
        if ($this->stopped_at) {
            return Carbon::parse($this->stopped_at)->diffInSeconds(Carbon::parse($this->started_at)) ;
        }
        return 0;
    }
}

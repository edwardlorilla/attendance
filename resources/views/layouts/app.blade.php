<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Payroll and Attendance') }}</title>
    @yield('css')
<style>
    .content {display:none;}
    </style>
    </head>
<body>
<div class="preload">
    <div class="loader">
        <div class="el-loading-mask">
            <div class="el-loading-spinner">
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
<div class="content">
    @yield('content')
</div>
@yield('js')
<script>
    $(function() {
        $(".preload .loader").fadeOut(1200, function () {
            $(".content").fadeIn(333);
        });
    });
    </script>
</body>
</html>
<?php

use Illuminate\Support\Facades\Route;
use PhpParser\Node\Stmt\Return_;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/layout', function () {
    return view('components/layout');
});

Route::get('/login', function () {
    return view('vapp/login');
});

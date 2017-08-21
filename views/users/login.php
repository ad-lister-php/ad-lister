<?php
require_once '../utils/Auth.php';
// session_start();


if (Auth::check()) {
    $data['state'] = 'error already logged in';
    print(json_encode($data));
    die();
}


    $username = User::escape(json_decode($_REQUEST['username']));
    $password = User::escape(json_decode($_REQUEST['password']));
    $login = Auth::attempt($username,$password);

    if ($login) {
        $person = User::find($_SESSION['LOGGED_IN_ID']);
        print(json_encode($person));
    }else {
        $data['status'] = 'Invalid Login';
        print(json_encode($data));
    }

 ?>

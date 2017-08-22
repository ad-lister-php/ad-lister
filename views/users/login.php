<?php
// require_once '../utils/Auth.php';
// session_start();
include './../bootstrap.php';

if (Auth::check()) {
    $data['state'] = 'error already logged in';
    print(json_encode($data));
    die();
}


    $username = User::escape($_REQUEST['username']);
    $password = User::escape($_REQUEST['password']);

    $login = Auth::attempt($username,$password);

    // print(json_encode($login));

    if ($login != null) {
        $person = User::find($_SESSION['LOGGED_IN_ID']);
        $person['session'] = $_SESSION['IS_LOGGED_IN'];
        print(json_encode($person));
    }else {
        $data['status'] = 'Invalid Login';
        print(json_encode($data));
    }

 ?>

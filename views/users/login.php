<?php
require_once '../utils/Auth.php';
// session_start();


// if (Auth::check()) {
//     $data['state'] = 'error already logged in';
//     print(json_encode($data));
//     die();
// }


    $username = User::escape($_REQUEST['username']);
    $password = User::escape($_REQUEST['password']);

    $login = Auth::attempt($username,$password);

    // print(json_encode($_SESSION['LOGGED_IN_ID']));

    if ($login != null) {
        $person = User::find($_SESSION['LOGGED_IN_ID']);
        print(json_encode($person));
    }else {
        $data['status'] = 'Invalid Login';
        print(json_encode($data));
    }

 ?>

<?php

    require '../models/User.php';
    header('Access-Control-Allow-Origin: *');
    $successful['success'] = true;
    $user = new User:
    $user->name = $_REQUEST['user'];
    $user->email = $_REQUEST['email'];
    $user->username = $_REQUEST['pass'];
    // $user->password = $_REQUEST['pass-confirm'];

    try {

        $user->save();

    } catch (Exception $e) {
        $successful['success'] = false;
    }

    print(json_encode($successful));


 ?>

<?php

    require '../models/User.php';
    $successful['success'] = true;
    $user = new User:
    $user->name = $_REQUEST['name'];
    $user->username = $_Request['username'];
    $user->email = $_REQUEST['email'];
    $user->password = $_REQUEST['pass'];
    $user->date_joined = date("M-d-Y");
    // $user->password = $_REQUEST['pass-confirm'];

    try {

        $user->save();

    } catch (Exception $e) {
        $successful['success'] = false;
    }

    print(json_encode($successful));


 ?>

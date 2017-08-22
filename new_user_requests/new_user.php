<?php

    require '../models/User.php';
    $successful['success'] = true;
    $user = new User;
    $user->name = $_REQUEST['name'];
    $user->username = $_REQUEST['username'];
    $user->email = $_REQUEST['email'];
    $user->password = $_REQUEST['password'];
    $user->image = $_REQUEST['image'];
    $user->date_joined = date("M-d-Y");

    try {

        $user->save();

    } catch (Exception $e) {
        $successful['success'] = false;
    }

    print(json_encode($successful));


 ?>

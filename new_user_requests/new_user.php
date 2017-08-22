<?php
	include './../bootstrap.php';
    $successful['success'] = true;
    $user = new User;
    $user->name = Model::escape($_REQUEST['name']);
    $user->username = Model::escape($_REQUEST['username']);
    $user->email = Model::escape($_REQUEST['email']);
    $user->password = Model::escape($_REQUEST['password']);
    $user->image = Model::escape($_REQUEST['image']);
    $user->date_joined = date("M-d-Y");

    try {

        $user->save();

    } catch (Exception $e) {
        $successful['success'] = false;
    }

    print(json_encode($successful));


 ?>

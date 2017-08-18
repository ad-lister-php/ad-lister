<?php
    session_start();
    require_once '../utils/Auth.php';
    $data['state'] = false;

    if (!Auth::check()) {
        print(json_encode($data));
        die();
    }
    $data['state'] = true;
    print(json_encode($data));
 ?>

<?php
require_once '../utils/Auth.php';
session_start();
$data['state'] = false;

if (!Auth::check()) {
    print(json_encode($data));
    die();
}
$data['state'] = true;
print(json_encode($data));

 ?>

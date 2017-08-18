<?php
require_once '../utils/Auth.php';
// session_start();
$data['state'] = false;

print(json_encode(echo $_REQUEST['username']));
die();


// if (Auth::check()) {
//     $data['state'] = 'error already logged in';
//     print(json_encode($data));
//     die();
// }

    // $login = Auth::attempt($_POST['username'],$_POST['password']);
    $test['test'] = 'clear';

    // if ($login) {
    //     $person = Model::find($_SESSION['LOGGED_IN_ID']);
    // }
    print(json_encode($test));

 ?>

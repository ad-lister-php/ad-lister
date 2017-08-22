<?php
require_once '../utils/Auth.php';
require_once '../models/Ad.php';
require_once '../models/User.php';
session_start();
$data['state'] = false;

if (!Auth::check()) {
    print(json_encode($data));
    die();
}

//$ad = new Ad();

$user = User::find(Auth::id());
$ads = Ad::all();

$results = [];

foreach($ads as $ad) {
	if($ad['seller'] == $user->username) {
		$results[] = $ad;
	}
}

$data['state'] = true;
print(json_encode($data));
print(json_encode($results));
 ?>

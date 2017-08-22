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

$user = User::user();
$ads = Ad::all();

$results = [];

foreach($ads as $ad) {
	if($ad['seller'] == $user['username']) {
		$results[] = $ad;
	}
}

$data['state'] = true;
$arr = ['data' => $data, 'results' => $results];

print(json_encode($arr));
 ?>

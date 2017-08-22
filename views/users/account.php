<?php
include "./../bootstrap.php";
$data = [];

if (!Auth::check()) {
    print(json_encode("No user logged in"));
    die();
}

//$ad = new Ad();

$user = Auth::user();
$ads = Ad::all();

foreach($ads as $ad) {
	if($ad['seller'] == $user['username']) {
		$data[] = $ad;
	}
}

print(json_encode($data));
 ?>

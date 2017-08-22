<?php

include "./../bootstrap.php";

$user = Auth::user();

if ($user) {
	$ads = Ad:all();
	foreach ($ads as $ad) {
		if ($user->username == $ad['seller']) {
			Ad::delete($ad['id']);
		}
	}
	User::delete($user->id);
	$successful['success'] = true;
}
else {
	$successful['success'] = false;
}

print (json_encode($succesful));

?>

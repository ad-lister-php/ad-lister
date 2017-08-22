<?php
	include './../bootstrap.php';
    $ad = new Ad;
    $ad->seller = Model::escape($_REQUEST['seller']);
    $ad->title = Model::escape($_REQUEST['title']);
    $ad->price = Model::escape($_REQUEST['price']);
    $ad->description = Model::escape($_REQUEST['desc']);
    $ad->date_posted = date("M-d-Y");
    $ad->location = Model::escape($_REQUEST['location']);

    $successful['success'] = true;

    try {

        $ad->save();
    } catch (Exception $e) {
        $successful['success'] = false;
    }

    print(json_encode($successful));


 ?>

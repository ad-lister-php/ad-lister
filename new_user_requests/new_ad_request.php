<?php
    require_once
    $ad = new Ad;
    $ad->seller = $_REQUEST['seller'];
    $ad->title = $_REQUEST['title'];
    $ad->price = $_REQUEST['price'];
    $ad->description = $_REQUEST['desc'];
    $ad->date_poster = $_REQUEST['date'];
    $ad->location = $_REQUEST['location'];

    try {

        $ad->save();
    } catch (Exception $e) {
        $successful['success'] = false;
    }

    print(json_encode($successful));


 ?>

<?php
    require_once "../models/Ad.php";
    header('Access-Control-Allow-Origin: *');
    $ad = new Ad;
    $ad->seller = $_REQUEST['seller'];
    $ad->title = $_REQUEST['title'];
    $ad->price = $_REQUEST['price'];
    $ad->description = $_REQUEST['desc'];
    $ad->date_posted = date("M-d-Y");
    $ad->location = $_REQUEST['location'];

    $successful['success'] = true;

    try {

        $ad->save();
    } catch (Exception $e) {
        $successful['success'] = false;
    }

    print(json_encode($successful));


 ?>

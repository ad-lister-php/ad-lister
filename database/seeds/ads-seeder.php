<?php

require_once __DIR__ . "/../../models/Ad.php";

$ad = new Ad();
$ad->seller = "finn_the_human";
$ad->title = "Leather Couch";
$ad->price = "100";
$ad->description = "Excellent condition. Only a few stains";
$ad->date_posted = date("M-d-Y");
$ad->location = "403 Southmost Blvd.";
$ad->image = "Krj7HskoQV62yxLuPpRB";
$ad->save();

$ad = new Ad();
$ad->seller = "jake_the_dog";
$ad->title = "1987 Honda GL1200";
$ad->price = "6000";
$ad->description = "Needs some repairs.";
$ad->date_posted = "Mar-12-2003";
$ad->location = "12 E 5th Street";
$ad->image = "SjnLgJxURTyeDf0sgPG0";
$ad->save();

$ad = new Ad();
$ad->seller = "jake_the_dog";
$ad->title = "Judas Priest Record Collection";
$ad->price = "35";
$ad->description = "All the classics. Only minor scratches.";
$ad->date_posted = "Mar-23-2003";
$ad->location = "12 E 5th Street";
$ad->image = "lINYePsOSYKHeIndTmqn";
$ad->save();

$ad = new Ad();
$ad->seller = "bernie_v";
$ad->title = "Rolex Watch";
$ad->price = "1500";
$ad->description = "Original Rolex 18k Yellow Gold/ Stainless Steel Two Tone Jubilee.";
$ad->date_posted = "Oct-15-2012";
$ad->location = "1005 5th Ave. Apartment 21C";
$ad->image = "tEZ23aZRS8qDip9n73fe";
$ad->save();

$ad = new Ad();
$ad->seller = "mojo_jojo";
$ad->title = "Steel String Guitar";
$ad->price = "25";
$ad->description = "Gibson steel string accoustic guitar. Comes with guitar case.";
$ad->date_posted = "Jun-02-2013";
$ad->location = "1515 Live Oaks Terrace";
$ad->image = "yHvZu3soR1qAFPMzB2c0";
$ad->save();

$ad = new Ad();
$ad->seller = "marceline_abadeer";
$ad->title = "Coffee Table";
$ad->price = "15";
$ad->description = "Bought this at IKEA. $15 OBO.";
$ad->date_posted = "Aug-15-2015";
$ad->location = "203 Senate Street";
$ad->image = "zLwItpMVQAiQ7hAcYFIm";
$ad->save();

$ad = new Ad();
$ad->seller = "marceline_abadeer";
$ad->title = "Gun Rack";
$ad->price = "10";
$ad->description = "Gun rack. Hold up to 5 rifles.";
$ad->date_posted = "Jan-02-2016";
$ad->location = "203 Senate Street";
$ad->image = "qlLrzOegRYuQUGoRdoz9";
$ad->save();

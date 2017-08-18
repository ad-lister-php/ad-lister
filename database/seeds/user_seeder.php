<?php

require_once __DIR__ . '/../../models/User.php';

$user = new User;
$user->name = 'Finn Mertens';
$user->email = 'finn@fansofbilly.com';
$user->username = "finn_the_human";
$user->password = $_ENV['USER_PASS'];
$user->date_joined = date("M-d-Y");
$user->save();

$user = new User;
$user->name = 'Jake';
$user->email = 'jake@fansofbilly.com';
$user->username = "jake_the_dog";
$user->password = $_ENV['USER_PASS'];
$user->date_joined = "Jun-03-1992";
$user->save();

$user = new User;
$user->name = 'Simon Petrikov';
$user->email = 'iceking@princessaholicanonymous.com';
$user->username = "ice_king";
$user->password = $_ENV['USER_PASS'];
$user->date_joined = "Feb-24-2001";
$user->save();

$user = new User;
$user->name = 'Bernard Vanderbuilt';
$user->email = 'bernie_v@yahoo.com';
$user->username = "bernie_v";
$user->password = $_ENV['USER_PASS'];
$user->date_joined = "Nov-15-2010";
$user->save();


$user = new User;
$user->name = 'Joleene Maxwell';
$user->email = 'jgirl55@gmail.com';
$user->username = "mojo_jojo";
$user->password = $_ENV['USER_PASS'];
$user->date_joined = "Nov-15-2010";
$user->save();

$user = new User;
$user->name = 'Thomas Redwood';
$user->email = 'trdwd12@hotmail.com';
$user->username = "tommyboy";
$user->password = $_ENV['USER_PASS'];
$user->date_joined = "Nov-15-2010";
$user->save();

$user = new User;
$user->name = 'Joeseph McBryde';
$user->email = 'joeymcjayjay@gmail.com';
$user->username = "marceline_abadeer";
$user->password = $_ENV['USER_PASS'];
$user->date_joined = "Nov-15-2010";
$user->save();

$user = new User;
$user->name = 'Mary Cotton';
$user->email = 'mary_cotton@yahoo.com';
$user->username = "m_cotton";
$user->password = $_ENV['USER_PASS'];
$user->date_joined = "Nov-15-2010";
$user->save();

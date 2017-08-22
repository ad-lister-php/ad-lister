<?php

        include './../bootstrap.php';

        session_unset();
        session_regenerate_id(true);


        print_r($_SESSION);


        print(json_encode("true"));

?>

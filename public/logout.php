<?php
        session_unset();
        session_destroy();
        session_regenerate_id();
        session_start();

        print(json_encode('Logout succesful'));

?>

<?php

require_once __DIR__ . '/Model.php';
header('Access-Control-Allow-Origin: *');

class User extends Model {
    protected static $table = 'users';

    // override the __set method so that we can hash passwords. if the
    // given key is not a password, just call the parent method
    public function __set($name, $value)
    {
        if ($name == 'password') {
            $value = password_hash($value, PASSWORD_DEFAULT);
        }
        parent::__set($name, $value);
    }

    /**
     * find a user by username or email
     *
     * @param string $usernameOrEmail
     * @return User|null returns null if no matching record is found
     */
    public static function findByUsernameOrEmail($usernameOrEmail)
    {
        self::dbConnect();

        $query = 'SELECT * FROM ' . self::$table . ' WHERE username = :username OR email = :email';

        $stmt = self::$dbc->prepare($query);
        $stmt->bindValue(':username', $usernameOrEmail, PDO::PARAM_STR);
        $stmt->bindValue(':email', $usernameOrEmail, PDO::PARAM_STR);
        $stmt->execute();

        $results = $stmt->fetch(PDO::FETCH_ASSOC);


        if ($results) {
            print_r(json_encode($results));
        }else {
            print_r(json_encode($results));
        }

    }
}

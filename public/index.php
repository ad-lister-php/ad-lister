 <?php
//Actually Page Controller
header('Access-Control-Allow-Origin: *');

function pageController()
{

    // defines array to be returned and extracted for view
    $data = [];

    // get the part of the request after the domain name
    $request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

    // switch that will run functions and setup variables dependent on what route was accessed
    switch ($request) {
        // TODO: put routes here

        case '/api/login':

            header('Content-Type: application/json');
            // echo json_encode(['data' => 'test']);
            require '../views/users/login.php';

            die();
        case '/api/all-ads':
            header('Content-Type: application/json');
            require_once '../views/ads/all.php';
            die();
        case '/api/register':
            header('Content-Type: application/json');
            require_once '../new_user_requests/new_user.php';
            die();
		case '/api/profile':
			// header('Content-Type: application/json');
			require_once '../views/users/account.php';
			die();
        case '/api/logout':
            header('Content-Type: application/json');
            require_once 'logout.php';
            die();
		case '/api/search':
			header('Content-Type: application/json');
			require_once '../new_user_requests/search.php';
			die();
        case '/api/logginCheck':
            header('Content-Type: application/json');
            require_once '../views/users/user-session.php';
            die();
        case '/api/delete':
            header('Content-Type: application/json');
            require_once'../new_user_requests/delete_ad.php';
            die();
        case '/api/createAd':
            header('Content-Type: application/json');
            require_once '../new_user_requests/new_ad_request.php';
            die();
        default:    // displays 404 if route not specified above
            $mainView = '../views/home.php';
            break;
    }

    $data['mainView'] = $mainView;

    return $data;
}

extract(pageController());
?>
<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><meta name="theme-color" content="#000000"><link rel="manifest" href="/manifest.json"><link rel="shortcut icon" href="/favicon.ico"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><title>Ad Lister</title><link href="static/css/main.c74bfae9.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div><script type="text/javascript" src="static/js/main.34be26ed.js"></script></body></html>

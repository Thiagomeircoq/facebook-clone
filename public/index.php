<?php


/**
 * Composer
 */
require dirname(__DIR__) . '/vendor/autoload.php';


/**
 * Error and Exception handling
 */
error_reporting(E_ALL);
set_error_handler('Core\Error::errorHandler');
set_exception_handler('Core\Error::exceptionHandler');


/**
 * Routing
 */
$router = new Core\Router();

// Routes
$router->add('', ['controller' => 'Home', 'action' => 'index']);

// Rotas de Login
$router->add('login/', ['controller' => 'Login', 'action' => 'index']);
$router->add('login/users', ['controller' => 'ControllerUser', 'action' => 'index']);
$router->add('login/users/insert', ['controller' => 'ControllerUser', 'action' => 'insert']);
$router->add('login/users/userValidate/{usuario}', ['controller' => 'ControllerUser', 'action' => 'show']);

$router->add('{controller}/{action}');
    
$router->dispatch($_SERVER['QUERY_STRING']);

<?php

namespace App\Controllers;

use \Core\View;

class Login extends \Core\Controller
{

    /**
     * Método responsável por retornar a página de login
     * @return void
     */

    public function index() 
    {
        View::renderTemplate('Login/login.html');
    }

}

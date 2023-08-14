<?php

namespace App\Controllers;

use \Core\View;
use App\Models\User;

class ControllerUser extends \Core\Controller
{

    /**
     * Método responsável por retornar os usuários
     * @return string
     */
    public function index(): string
    {
        $userModel = new User();
        $users = $userModel->getAll();
        return $users;
    }

    /**
     * Método responsável por inserir os usuários
     * @return void 
     */
    public function insert(): void
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if ($this->show($_POST['usuario'], $_POST['senha'])) {
                $userModel = new User();
                $users = $userModel->insert($_POST);
                echo json_encode($response = ['msg' => 'Dados Inseridos com sucesso!', 'status' => 'success']);
                return;
            } else {
                echo json_encode($response = ['msg' => 'Usuário já existente!', 'status' => 'error']);
                return;
            }
        } else {
            echo json_encode($response = ['msg' => 'Dados inválidos!', 'status' => 'error']);
        }
        return;
    }

    /**
     * Método responsável por retornar um registro especifico pelo usuário
     * @param string $usuario
     * @param string $senha
     * @return boolean
     */
    private function show(String $usuario, String $senha)
    {
        $userModel = new User();
        $user = $userModel->getUser($usuario, $senha);
        return (count($user) >= 1) ? false : true;
    }

}
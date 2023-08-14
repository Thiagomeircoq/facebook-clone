<?php

namespace App\Models;

use PDO;

class User extends \Core\Model
{

    /**
     * Método responsável por obter todos os usuários
     * @return array
     */
    public function getAll(): array
    {
        $db = static::getDB();
        $stmt = $db->query('SELECT * FROM user');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Método responsável por buscar um usuário especifico
     * @param string $usuario
     * @param string $senha
     * @return array
     */
    public function getUser(String $usuario, String $senha): ?array
    {
        // BUSCA UM USUÁRIO EXISTENTE
        $db = static::getDB();
        $stmt = $db->prepare("SELECT * FROM user WHERE usuario = :usuario");
        $stmt->bindParam(':usuario', $usuario);
        $stmt->execute();
        
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // CASO EXISTA UM USUÁRIO VERIFICA SE A SENHA ESTÁ CORRETA
        return ($user && password_verify($senha, $user['senha'])) ? $user : null;
         
    }

    /**
     * Método responsável por cadastrar um usuário no banco
     * @param array $user
     * @return bool
     */
    public function insert(Array $user): bool
    {
        $db = static::getDB();
        
        // DEFINE A CONSULTA SQL PARA A INSERÇÃO
        $sql = "INSERT INTO user (nome, sobrenome, usuario, senha, dataNascimento, genero) VALUES (:nome, :sobrenome, :usuario, :senha, :dataNascimento, :genero)";

        // PREPARA A CONSULTA
        $stmt = $db->prepare($sql);

        // CRIPTOGRAFA A SENHA UTILIZANDO O PASSWORD_HASH
        $hashedPassword = password_hash($user['senha'], PASSWORD_DEFAULT);

        // EXECUTA A CONSULTA COM OS VALORES DOS PARÂMETROS
        return $result = $stmt->execute([
            ':nome' => $user['nome'],
            ':sobrenome' => $user['sobrenome'],
            ':usuario' => $user['usuario'],
            ':senha' => $hashedPassword,
            ':dataNascimento' => $user['dataNascimento'],
            ':genero' => $user['genero'],
        ]);

    }
}

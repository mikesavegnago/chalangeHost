<?php

use App\Lib\Database;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../app/lib/database.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

$app = AppFactory::create();

$app->get('/prices', function (Request $request, Response $response, $args) {
    $database = new Database();
    $db = $database::StartUp();
    $stm = $db->prepare("SELECT * FROM products");
    $stm->execute();
    $result = $stm->fetchAll();
    foreach ($result as &$row) {
        $stm = $db->prepare("SELECT * FROM cycles WHERE product = ?");
        $stm->execute(array($row->id));
        $row->cycle = $stm->fetchAll();
    }
    $response->getBody()->write(
        json_encode($result, JSON_UNESCAPED_UNICODE)
    );

    return $response;
});

$app->get('/prices/{id}', function (Request $request, Response $response, $args) {
    $database = new Database();
    $db = $database::StartUp();
    $stm = $db->prepare("SELECT * FROM products WHERE id = ?");
    $stm->execute(array($args['id']));
    $result = $stm->fetchObject();
    $stmC = $db->prepare("SELECT * FROM cycles WHERE product = ?");
    $stmC->execute(array($result->id));
    $result->cycle = $stmC->fetchAll();
    $response->getBody()->write(
        json_encode($result, JSON_UNESCAPED_UNICODE)
    );

    return $response;
});

$app->run();

<?php

// function connect_db() {
//     $host = "localhost";
//     $database = "cogip";
//     $username = "root";
//     $password ="";
//     $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
//     return $pdo;
// }

// function connect_db() {
//     $dsn = 'mysql:dbname=cogip;host=db';
//     $user = 'root';
//     $password = 'KWmuLNjpzseXcTUNcnpz';
//     $pdo = new PDO($dsn, $user, $password);

//     return $pdo;
// }

<<<<<<< HEAD

//MATHIAS
function connect_db() {
    $dsn = 'mysql:dbname=COGIP;host=db';
    $user = 'root';
    $password = '';
=======
function connect_db()
{
    $dsn = 'mysql:dbname=cogip;host=db';
    $user = 'root';
    $password = 'root';
>>>>>>> thomas
    $pdo = new PDO($dsn, $user, $password);

    return $pdo;
}

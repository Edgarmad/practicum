<?php
session_start();
$dbhost = 'host'
$dbname = 'nombre';
$dbuser = 'root';
$dbpass = '';
$port = '';
$connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname,$port);
if($connection->connect_error){
    die("Conexión fallida: ".$connection->connect_error);
  }
?>
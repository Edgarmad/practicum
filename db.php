<?php
session_start();
$dbhost = 'localhost';
$dbname = 'sistema_practicum';
$dbuser = 'root';
$dbpass = '';
$connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
if(isset($connection)){
    print( 'DB esta conectada');
} else{
    print( 'DB NO esta conectada');
}
header('Location: admin.php');
?>
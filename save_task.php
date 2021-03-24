<?php
include('db.php');
if (isset($_POST['save_task'])) {
    $name = $_POST['nombre_usuario'];
    $last_name = $_POST['apellido_usuario'];
    $query = "INSERT INTO datos_personales(nombre, apellido) VALUES ('$name', '$last_name')";
    $result = mysqli_query($connection, $query);
    if(!$result) {
        die("Query Failed.");
      }
    echo 'funciono';
  }

?>
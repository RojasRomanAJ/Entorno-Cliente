<?php

require_once '../../configuracion/conexion.php';
// Creamos la conexion
$conn = new mysqli($servidor, $usuario, $password,$baseDatos);
$conn->set_charset("utf8");
$sql = "SELECT id,nombre,apellidos,producto FROM clientes";
$clientes = $conn->query($sql);


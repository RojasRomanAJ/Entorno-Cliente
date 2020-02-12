<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "todomuebles";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT `id`, `nombre`, `tipo`, `tamanio`, `descripcion`, `Precio` FROM `muebles`";
$muebles = $conexion->query($sql);
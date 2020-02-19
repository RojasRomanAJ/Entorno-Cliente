<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "todomuebles";

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "DELETE FROM muebles WHERE id=".$_POST["id"];
$conexion->query($sql) or die(mysqli_error());

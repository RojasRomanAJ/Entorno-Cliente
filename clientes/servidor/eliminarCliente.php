<?php
require_once '../../configuracion/conexion.php';

// header('Content-Type: application/json; charset=utf-8');
// header('Cache-Control: no-cache, must-revalidate');
 //Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "DELETE FROM Clientes where id=".$_POST["id"];
$conexion->query($sql);

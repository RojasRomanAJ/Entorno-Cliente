<?php

require_once "C:/xampp1/htdocs/EntornoCliente/proyecto2ºTrimestre/configuracion/conexion.php";

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "DELETE FROM `muebles` WHERE `id` = ".$_POST["id"];
$conexion->query($sql);


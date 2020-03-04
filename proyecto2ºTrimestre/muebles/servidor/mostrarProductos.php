<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once '../../configuracion/conexion.php';

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT nombre,tipo,tamanio,descripcion,precio FROM muebles";
$resultado = $conexion->query($sql);
$muebles = array();
if ($resultado->num_rows > 0) {
    while($mueble = $resultado->fetch_assoc()) {
        $muebles[] = $mueble;
    }
}
echo json_encode($muebles);
<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

require_once '../../configuracion/conexion.php';

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "UPDATE muebles SET nombre = '$_POST[nombre]', tipo = '$_POST[tipo]', tamanio = '$_POST[tamanio]', descripcion = '$_POST[descripcion]', precio = '$_POST[precio]' WHERE id = '$_POST[id]'";
$conexion->query($sql);

?>
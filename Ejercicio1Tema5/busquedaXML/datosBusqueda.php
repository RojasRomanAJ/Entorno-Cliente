<?php

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "tienda_muebles";

$conn = mysqli_connect($servidor, $usuario, $password, $baseDatos);
$sql = "SELECT marca, tipo, disponibilidad, descripcion FROM muebles WHERE tipo LIKE '%".$_GET['tipo']."%'";
$resultado = mysqli_query($conn, $sql);

header("Content-Type: text/xml");
header('Cache-Control: no-cache, must-revalidate');

echo '<?xml version="1.0" encoding="utf-8"?>
<MUEBLES>';

while($row = mysqli_fetch_array($resultado)){
    echo "<MUEBLE>";
    echo "<MARCA>". $row['marca'] ."</MARCA>";
    echo "<TIPO>". $row['tipo'] ."</TIPO>";
    echo "<DISPONIBILIDAD>". $row['disponibilidad'] ."</DISPONIBILIDAD>";
    echo "<DESCRIPCION>". $row['descripcion'] ."</DESCRIPCION>";
    echo "</MUEBLE>";
}
echo "</MUEBLES>";
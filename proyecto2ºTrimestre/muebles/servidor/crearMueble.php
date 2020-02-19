<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 
 

$nombre = $_POST["nombre"];
$tipo = $_POST["tipo"];
$tamanio = $_POST["tamanio"];
$descripcion = $_POST["descripcion"];
$precio = $_POST["precio"];

$conn = mysqli_connect( 'localhost', 'root', '', 'todomuebles');

$sql =  "INSERT INTO `muebles`(`id`, `nombre`, `tipo`, `tamanio`, `descripcion`, `precio`) VALUES ('', '$nombre', '$tipo', '$tamanio', '$descripcion', '$precio')";
$result=mysqli_query($conn,$sql);
?>
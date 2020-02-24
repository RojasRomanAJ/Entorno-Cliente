<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

require_once '../../configuracion/conexion.php';

$nombre=$_POST["nombre"];
$apellido=$_POST["apellido"];
$producto=$_POST["producto"];

// CREAMOS LA CONECCION CON LA BASE DE DATOS COLOCANDO NUESTRO SERVER,USER,PASSWORD,BASE DE DATOS.

$conn = mysqli_connect($servidor, $usuario, $password, $baseDatos);

// INSETAMOS LOS DATOS QUE HEMOS AÑADIDO EN EL FORMULARIO. Recordar incluir siempre el id aunque este vacio ya que se auto incrementa pero tiene que estar para que el comando insert se realice

$sql =  "INSERT INTO `clientes`(`id`, `Nombre`, `Apellidos`, `Producto`) VALUES ('', '$nombre', '$apellido', '$producto')";
$result=mysqli_query($conn,$sql);
?>
<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 


// CREAMOS LA CONECCION CON LA BASE DE DATOS COLOCANDO NUESTRO SERVER,USER,PASSWORD,BASE DE DATOS.
$conn = mysqli_connect( 'localhost', 
                        'root', 
                        '', 
                        'todomuebles');
// CREAMOS EL SELECT QUE BUSQUE LOS DATOS DE NUESTRO CLIENTE CUANDO COINCIDA EL NOMBRE.
$sql =  "SELECT `id`, `nombre`, `apellidos`, `producto` FROM `clientes` WHERE `nombre` LIKE '".$_POST['nombre']."'";
$clientes=array();

$result=mysqli_query($conn,$sql);
while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $clientes[]=$row;
}


echo json_encode($clientes);
?>
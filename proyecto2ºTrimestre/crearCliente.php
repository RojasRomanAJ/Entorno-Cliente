<?php
    $mysqli = mysqli_connect('localhost', 'root', '', 'todomuebles');
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="icon" type="image/png" href="img/índice.png" sizes="32x32">
    <title>Todo mueble</title>

    <!-- Bootstrap css-->
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
          crossorigin="anonymous">
   
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html">
          <img src="img/índice.png" width="30" height="30" class="d-inline-block align-top" alt="inicio">
          Todo Mueble
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-hidden="true" aria-expanded="false">
                Búsquedas
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="busquedaProductos.html">Mostrar Productos</a>
                <a class="dropdown-item" href="busquedaClientes.html">Mostrar Clientes</a>
              </div>
            </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Administración Productos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="mostrarProductos.html">Mostrar Producto</a>
              <a class="dropdown-item" href="crearProducto.html">Crear Producto</a>
              <a class="dropdown-item" href="editarProducto.html">Editar Producto</a>
              <a class="dropdown-item" href="eliminarProducto.php">Eliminar Producto</a>
            </div>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administración Clientes
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="mostrarClientes.html">Mostrar Clientes</a>
                <a class="dropdown-item" href="crearCliente.php">Crear Cliente</a>
                <a class="dropdown-item" href="editarCliente.html">Editar Cliente</a>
                <a class="dropdown-item" href="eliminarCliente.php">Eliminar Cliente</a>
              </div>
              </li>
          </ul>
        </div>
      </nav>
      <hr>
      <div class="container">
        <div class="row">
            <form id="formulario" onsubmit ="validarFormulario()">
            <div id="spinner" class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
            </div>
                
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" onchange="validarNombre()">
                    <div class="error bg-danger"></div>
                  
    
                    <label for="apellido">Apellido</label>
                    <input type="text" class="form-control" id="apellido" onchange="validarApellido()">
                    <div class="error bg-danger"></div>


                    <label for="producto">Seleccione producto deseado</label>
                    <p></p>
                    <select name="" id="producto">
                        <option value="0">Seleccione</option>
                    <?php 
                        $query = $mysqli -> query ("SELECT * FROM muebles");
                        while ($valores = mysqli_fetch_array($query)){
                            echo '<option value="'.$valores['id'].'">'.$valores['nombre'].'</option>';
                        }
                        
                    ?>
                    </select>
                    <p></p>

                    <label class="form-check-label"> Terminos y condiciones </label>
                    <input  type="checkbox" id="terminos" value="1"  onchange="validarTerminos()">
                    <div class="error bg-danger"></div>
    
                <button type="submit" class="btn btn-primary">Enviar</button>
    
                <div id="resultado"></div>
            </form>
        </div>
    </div>
    
    
    <div class="modal fade" id="modal" data-backdrop="static">
                    <div class="modal-dialog">
                        <div class="modal-content">
    
                            <div class="modal-header">
                                
                                <h5 class="modal-title" id="exampleModalLabel">Creando</h5>
                            </div>
    
                            <div class="modal-body">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w-100 bg-info" role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    


                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossorigin="anonymous"
            ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossorigin="anonymous">
    
        </script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
                integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
                crossorigin="anonymous">
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="clientes/js/validacion.js" defer></script>
        <link rel="stylesheet" href="clientes/css/style.css">

</body>
</html>
<?php
    mysqli_close($mysqli);  
?>
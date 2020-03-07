$(function(){
    $("button[data-accion='editar']").on("click",function(event){
        let boton = $(event.target);
        
        mostrarModalEditar(boton.attr("data-ideditar"));
    });

    $("button[data-accion='confirmar-editar']").on("click",function(event){
        let boton = $(event.target);
        idEditar = boton.data("ideditar");
        let nombre = $('#nombre').val();
        let tipo = $('#tipo').val();
        let tamanio = $('#tamanio').val();
        let descripcion = $('#descripcion').val();
        let precio = $('#precio').val();

        editarMueble(idEditar,nombre,tipo,tamanio,descripcion,precio );
    });
});

function mostrarModalEditar(idEditar){
    $("#botonConfirmarEditar").attr("data-ideditar",idEditar);
    $("#modalEditar").modal("show");
}

function editarMueble(idEditar, nombre, tipo, tamanio, descripcion, precio){
    let form = new FormData();
    form.append("id",idEditar);
    form.append("nombre",nombre);
    form.append("tipo",tipo);
    form.append("tamanio",tamanio);
    form.append("descripcion",descripcion);
    form.append("precio",precio);
    

    fetch("muebles/servidor/editarMueble.php",{
        method:"POST",
        body:form
    }).then(function(){
        $("#modalEditar").modal("hide");
        $("tr[data-idMueble='"+idEditar+"']").show();
    });
}
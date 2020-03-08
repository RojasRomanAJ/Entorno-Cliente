$(function(){
    $("button[data-accion='editar']").on("click",function(event){
        let boton = $(event.target);
        
        mostrarModalEditar(boton.attr("data-ideditar"));
    });

    $("button[data-accion='confirmar-editar']").on("click",function(event){
        let boton = $(event.target);
        idEditar = boton.data("ideditar");
        let nombre = $('#nombre').val();
        let apellidos = $('#apellidos').val();

        editarCliente(idEditar,nombre,apellidos);
    });
});

function mostrarModalEditar(idEditar){
    $("#botonConfirmarEditar").attr("data-ideditar",idEditar);
    $("#modalEditar").modal("show");
}

function editarCliente(idEditar,nombre,apellidos){
    let form = new FormData();
    form.append("id",idEditar);
    form.append("nombre",nombre);
    form.append("apellidos",apellidos);    

    fetch("clientes/servidor/editarCliente.php",{
        method:"POST",
        body:form
    }).then(function(){
        $("#modalEditar").modal("hide");
        $("tr[data-idCliente='"+idEditar+"']").show();
    });
}
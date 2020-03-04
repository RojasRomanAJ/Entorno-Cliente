$(function(){
    $("button[data-accion='editar']").on("click",function(event){
        let boton = $(event.target);
        
        mostrarModalEditar(boton.attr("data-ideditar"));
    });

    $("button[data-accion='confirmar-editar']").on("click",function(event){
        let boton = $(event.target);
        editarMueble(boton.attr("data-ideditar"));
    });
});

function mostrarModalEditar(idEditar){
    $("#botonConfirmarEditar").attr("data-ideditar",idEditar);
    $("#modalEditar").modal("show");
}

function editarMueble(idEditar){
    let form = new FormData();
    form.append("id",idEditar);
    fetch("muebles/servidor/editarMueble.php",{
        method:"POST",
        body:form
    }).then(function(){
        $("#modalEditar").modal("hide");
        $("tr[data-idMueble='"+idEditar+"']").show();
    });
}
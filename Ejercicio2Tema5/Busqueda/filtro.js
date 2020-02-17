function Spinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}

function filtro() {
    let input = $("#id").val();
    $.ajax({
        url: "conexion.php",
        data: { id: input },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
    })
        .done(escribirResultado)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });

}

function escribirResultado(respuesta) {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados = respuesta;
    let salida = "<table border='1'><tr><th>ID</th><th>NOMBRE</th><th>TIPO</th><th>TAMAÑO</th><th>DESCRIPCIÓN</th></tr>";

    for (let i = 0; i < resultados.length; i++) {
        let objeto = resultados[i];
        salida += "<tr><td>" + objeto.id + "</td><td>" +
            objeto.nombre + "</td><td>" + objeto.tipo + "</td><td>" +
            objeto.tamanio + "</td><td>" + objeto.descripcion + "</td></tr>";
    }

    salida += "</table>";

    divResultado.innerHTML = salida;
}
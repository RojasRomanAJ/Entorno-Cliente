document.addEventListener("DOMContentLoaded", function(){
    let crearDatos = document.getElementById("crearDatos");
    crearDatos.addEventListener("submit", function(event){
        event.preventDefault();
        realizarPeticionAsincrona();
    });
})

function objetoXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function comprobarEstadoPeticion() {
    switch (this.readyState) {
        case 4:
            if (this.status == 200) {
                let divRespuesta = document.getElementById("resultado");
                divRespuesta.innerHTML = this.responseText;
                document.getElementById("resultado").innerHTML = "<p>Se ha creado correctamente</p>";
            } else {}
            break;
    }
}

function realizarPeticionAsincrona() {
    let marca = document.getElementById("marca").value;
    let tipo = document.getElementById("tipo").value;
    let disponibilidad = document.getElementById("disponibilidad").value;
    let descripcion = document.getElementById("descripcion").value;

    document.getElementById("spinner").style = "display:block";

    miXHR = new objetoXHR();

    miXHR.open("POST", "insertarDatos.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;

    let datos = "marca="+marca+"&tipo="+tipo+"&disponibilidad="+disponibilidad+"&descripcion="+descripcion;
    miXHR.send(datos);
    document.getElementById("spinner").style = "display:none";

}
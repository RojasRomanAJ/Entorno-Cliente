document.addEventListener("DOMContentLoaded", function(){
    let formularioJSON = document.getElementById("formularioJSON");
    formularioJSON.addEventListener("submit", function(event){
        event.preventDefault();
        realizarPeticionTamanio();
    });
})

function objetoXHR(){
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function comprobarEstadoPeticion(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                let divResultado = document.getElementById("resultado");
                divResultado.innerHTML = this.responseText;
                crearTablaJSON(this.responseText);
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            document.getElementById("spinner").style ="display:none";
            break;    
    }
}

function realizarPeticionTamanio(){
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";

    
    let tamanio = document.getElementById("tamanio").value;
    
    
    document.getElementById("spinner").style = "display:block";

    miXHR = new objetoXHR();

    miXHR.open("POST", "muebles/servidor/busquedaTamanio.php", true);

    let datos = "tamanio="+tamanio;
    
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(datos);
}

function crearTablaJSON(respuesta){
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados = JSON.parse(respuesta);
    let salida = "<table border='1'<tr><th>ID</th><th>NOMBRE</th><th>TIPO</th><th>TAMANIO</th><th>DESCRIPCIÓN</th><th>PRECIO</th></tr>";

    for (let i = 0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida += "<tr><td>"+objeto.id+"</td><td>"+objeto.nombre+"</td><td>"+
        objeto.tipo+"</td><td>"+objeto.tamanio+"</td><td>"+
        objeto.descripcion+"</td><td>"+objeto.precio+"</td></tr>";
    }

    salida += "</table>";

    divResultado.innerHTML = salida;
}
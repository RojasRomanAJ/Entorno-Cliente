document.addEventListener("DOMContentLoaded", function(){
    let formularioXML = document.getElementById("formularioXML");
    formularioXML.addEventListener("submit", function(event){
        event.preventDefault();
        realizarPeticionSincronaXML();
    })
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
                tratarResultadoXML(this.responseText);
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.");
            }
            document.getElementById("spinner").style ="display:none";
            break;    
    }
}

function realizarPeticionSincronaXML(){
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";

    let tipo = document.getElementById("tipo").value;
    document.getElementById("spinner").style = "display:block";

    miXHR = new objetoXHR();

    miXHR.open("GET", "datosBusqueda.php"+tipo, false);
    miXHR.setRequestHeader("Content-Type", "text/xml");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);
}

function tratarResultadoXML(textoXMLRespuesta){
    let  datos=textoXMLRespuesta;

    // Tenemos que recorrer el fichero XML empleando los métodos del DOM
    let muebles = datos.documentElement.getElementsByTagName("MUEBLE");

    // En la variable salida compondremos el código HTML de la tabla a imprimir.
    let salida="<table border='1'><tr><th>MARCA</th><th>TIPO</th><th>DISPONIBILIDAD</th><th>DESCRIPCION</th></tr>";

    // Hacemos un bucle para recorrer todos los elementos.
    for (let i=0;i<muebles.length;i++){
        salida+="<tr>";

        let marca =muebles[i].getElementsByTagName("MARCA");
        salida+="<td>" + marca[0].firstChild.nodeValue + "</td>";

        let tipo =muebles[i].getElementsByTagName("TIPO");
        salida+="<td>" + tipo[0].firstChild.nodeValue + "</td>";

        let disponibilidad =muebles[i].getElementsByTagName("DISPONIBILIDAD");
        salida+="<td>" + disponibilidad[0].firstChild.nodeValue + "</td>";

        let descripcion =muebles[i].getElementsByTagName("DESCRIPCION");
        salida+="<td>" + descripcion[0].firstChild.nodeValue + "</td>";

    // Cerramos la fila.
        salida+="</tr>";
    }

    // Cuando ya no hay más muebles cerramos la tabla.
    salida+="</table>";

    // Imprimimos la tabla dentro del contenedor resultados.
    document.getElementById("resultado").innerHTML=salida;
}
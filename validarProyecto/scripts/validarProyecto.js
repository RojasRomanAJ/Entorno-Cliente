/**
 * input Nombre debe contener mas de 3 letras, sólo mayusculas y que contenga como mínimo 1 número
 * 
 * input Tiempo(años) debe contener sólo números y que sea mayor de 2.
 * 
 * select Tipo:
 *      Ninguno
 *      Redes
 *      Desarrollo
 *      Análisis
 *      Refactor 
 * "ninguno" no debe ser válido, si el proyecto es de tipo "Desarrollo" el tiempo no puede ser
 * menos de 5
 * 
 * radius Beneficios:
 *      Corto Plazo
 *      Largo Plazo 
 * debe marcarse siempre 1
 * 
 * checkbox Personal:
 *      Programador
 *      Analista
 *      Jefe Proyecto
 * debe marcarse al menos 1
*/

$(function(){
    $("#name").keyup(validarNombre);
    $("#time").keyup(validarTiempo);
    $("#select").select(validarTipo);
   /* $("#form").submit(function(event){
        event.preventDefault();
        validarFormulario;
    })*/
})

/* Función que valida el input Nombre */
function validarNombre(){
    let esCorrecto = true;
    let expresion = /([A-Z]{3,})+([0-9]{1,})$/;
    let valorNombre = $("#name").val();
    $("#name").removeClass("inputErroneo");
    $("#name").removeClass("inputCorrecto");
    $("#nameErrors").empty();

    /* Validamos que el valor introducido se ajuste a la expresión regular */
    if(!expresion.test(valorNombre)){
        esCorrecto = false;
        let divError = $("<div>EL NOMBRE DEBE CONTENER MÍNIMO 3 LETRAS, 1 NUMERO Y DEBE ESTAR EN MAYÚSCULAS</div>");
        $("#nameErrors").append(divError);
        $("#name").addClass("inputErroneo");
    }

    /* Si el contenido del input se encuentra vacío, eliminamos el div nameErrors y eliminamos la clase inputErroneo */
    if(valorNombre === ""){
        $("#name").removeClass("inputErroneo");
        $("#nameErrors").empty();
    }

    /* Si el input es correcto coloreamos el borde en verde */
    if (esCorrecto) {
        $("#name").addClass("inputCorrecto");
    }

    return esCorrecto;
}


/* Función que valida el input de Tiempo(años) */
function validarTiempo(){
    let esCorrecto = true;
    let expresion = /^[0-9]+$/;
    let valorTiempo = $("#time").val();
    $("#time").removeClass("inputErroneo");
    $("#time").removeClass("inputCorrecto");
    $("#timeErrors").empty();

    /* Validamos que el valor introducido sea un número*/
    if (!expresion.test(valorTiempo)) {
        esCorrecto = false;
        let divError = $("<div>SÓLO SE PERMITEN NÚMEROS</div>");
        $("#timeErrors").append(divError);
        $("#time").addClass("inputErroneo");
    }

    /* Validamos que el valor introduciodo sea mayor de 2 */
    if (valorTiempo < 3) {
        esCorrecto = false;
        let divError = $("<div>EL NÚMERO TIENE QUE SER MAYOR QUE 2</div>");
        $("#timeErrors").append(divError);
        $("#time").addClass("inputErroneo");
    }

    /* Si el contenido del input se encuentra vacío, eliminamos el div timeErrors y eliminamos la clase inputErroneo */
    if(valorTiempo === ""){
        $("#time").removeClass("inputErroneo");
        $("#timeErrors").empty();
    }

    /* Si el input es correcto coloreamos el borde en verde */
    if (esCorrecto) {
        $("#time").addClass("inputCorrecto");
    }

    return esCorrecto;
}

/* Función que valida el select Tipo */
function validarTipo(){
    let esCorrecto = true;
    let valorSelect = $("#select").val();
    let valorTiempo = $("#time").val();
    $("#select").removeClass("inputErroneo");
    $("#select").removeClass("inputCorrecto");
    $("#selectErrors").empty();

    /* Validamos que la opción NINGUNO no sea válido */
    if(valorSelect === "Ninguno"){
        esCorrecto = false;
        let divError = $("<div>NINGUNO NO ES VÁLIDO POR FAVOR SELECCIONE UN TIPO VÁLIDO</div>");
        $("#selectErrors").append(divError);
        $("#select").addClass("inputErroneo");
    }

    if(valorSelect === "Desarrollo" && valorTiempo < 5){
        esCorrecto = false;
        let divError = $("<div>PARA ESTAR EN DESARROLLO DEBE DE TENER 5 AÑOS DE EXPERIENCIA</DIV>");
        $("#selectErrors").append(divError);
        $("#select").addClass("inputErroneo");
    }

    return esCorrecto;
}

/*function validarFormulario(){
    let 
}*/
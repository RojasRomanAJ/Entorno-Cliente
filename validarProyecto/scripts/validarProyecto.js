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
    $("#time").keyup(validarTiempo);
    $("#form").submit(function(event){
        event.preventDefault();
        validarFormulario;
    })
})

function validarTiempo(){
    let esCorrecto = true;
    let expresion = /^[0-9]+$/;
    let valorTiempo = $("#time").val();
    $("#time").removeClass("inputIncorrecto");
    $("#time").removeClass("inputCorrecto");
    $("#timeErrors").empty();

    /* Validamos que el valor introducido sea un número*/
    if (!expresion.test(valorTiempo)) {
        esCorrecto = false;
        let divError = $("<div>SÓLO SE PERMITEN NÚMEROS</div>");
        $("#timeErrors").append(divError);
    }

    if (valorTiempo < 3) {
        esCorrecto = false;
        let divError = $("<div>EL NÚMERO TIENE QUE SER MAYOR QUE 2");
        $("#timeErrors").append(divError);
    }

    if (esCorrecto) {
        $("#time").addClass("inputCorrecto");
    } else {
        $("#time").addClass("inputIncorrecto");
    }

    return esCorrecto;
}

function validarFormulario(){
    let 
}
function validarTelefonoMovil(telefono){

    let valido = false;
    if(telefono.length === 9){
        if(telefono.charAt(0) === "6" || telefono.charAt(0) === "7"){
            if(isNaN(telefono) === false){
                valido = true;
            }
        }
    }
    return valido;
}

function validarTelefonoMovil2(telefono){

    let esValido = false;
    if(telefono.length === 9){
        if(telefono.startsWith("6") || telefono.startsWith("7")){
        }

        let tlf = telefono.slice("");
        for(let numero of tlf){
            switch(numero){
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    esValido = true;
                    break;
                default:
                    return false;
                    break;
            }
        }
    }
    return esValido;
}

function calcularLetraDNI(dni){

    let letras = ("TRWAGMYFPDXBNJZSQVHLCKET");

    let numero = dni % 23;
    let letraDNI = letras.charAt(numero);
    return letraDNI;
}

function esDniValido(dni){

    let esValido = false;
    dni = dni.trim;
    if(dni.length === 9){
        let numero = parseInt(dni.substring(0,8));
        let letra = dni.charAt(8);
        let letraDNI = calcularLetraDNI(numero);
        if(letra.toLocaleUpperCase === letraDNI){
            esValido = true;
        }
    }
    return esValido;
}

function esEmailValido(email){

    let esValido = false;
    email = email.trim().replace(" ", "");
    let textoEmail = email.split("@");
    
    if(textoEmail[0].length >= 1
        && 
        textoEmail[1].length >= 3
        ){
        let textoPunto = textoEmail[1].split(".");
        if(textoPunto[0].length >= 1
            && 
            textoPunto[1].length >= 1
            ){
            esValido = true;
        }
    }

    return esValido;

}

function esPassValido(pass){

    let esValido = false;
    
    if(pass.length >= 9){
        if(pass.search("!") !== -1
        ||
        pass.search("?") !== -1){
            if(pass === pass.toLocaleUpperCase()){
                let contadorNumeros = 0;
                for (let i = 0; i < pass.length; i++) {
                    switch(pass[i]){
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            contadorNumeros++;
                            break;
                    }
                }
                if(contadorNumeros){

                }
            }
        }
    }

}
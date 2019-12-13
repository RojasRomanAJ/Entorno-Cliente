class Muebles {
    constructor(id, marca, tamanio, precio, tipo){
        this._id = id;
        this._marca = marca;
        this._tamanio = tamanio;
        this._precio = precio;
        this._tipo = tipo;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(tamanio){
        this._tamanio = tamanio;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    get tipo(){
        return this._tipo;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }

}

let armario1 = new Muebles(1, "GRÄLVIKEN", "mediano", "200€", "armario");
let silla2 = new Muebles(2, "STOCKHOLM", "grande", "260€", "silla");
let mesa3 = new Muebles(3, "LIATORP", "pequenio", "20€", "mesa");
let sillon2 = new Muebles(4, "HAVSTA", "pequenio", "90€", "sillon");
let divan2 = new Muebles(5, "LISTERBY", "mediano", "769€", "divan");
let sillon3 = new Muebles(6, "EKET", "mediano", "150€", "sillon");
let mesa2 = new Muebles(7, "MALSJÖ", "grande", "320€", "mesa");
let armario2 = new Muebles(8, "MORUM", "pequenio", "150€", "armario");
let silla1 = new Muebles(9, "HEMNES", "mediano", "1200€", "silla");
let sillon1 = new Muebles(10, "JOKKMOKK", "grande", "300€", "sillon");
let mesa1 = new Muebles(11, "KALLAX", "mediano", "780€", "mesa");
let silla3 = new Muebles(12, "ARKELSTORP", "pequenio", "420€", "silla");
let divan1 = new Muebles(13, "REGISSÖR", "pequenio", "352€", "divan");
let armario3 = new Muebles(14, "MALM", "grande", "2000€", "armario");
let divan3 = new Muebles(15, "FRIHETEN", "pequenio", "465€", "divan");
let balda1 = new Muebles(16, "FLOTTEBO", "grande", "985€", "balda");
let listaMuebles = [];

listaMuebles.push(armario1);
armario1.id = listaMuebles.length;

listaMuebles.push(silla2);
silla2.id = listaMuebles.length;

listaMuebles.push(mesa3);
mesa3.id = listaMuebles.length;

listaMuebles.push(sillon2);
sillon2.id = listaMuebles.length;

listaMuebles.push(divan2);
divan2.id = listaMuebles.length;

listaMuebles.push(sillon3);
sillon3.id = listaMuebles.length;

listaMuebles.push(mesa2);
mesa2.id = listaMuebles.length;

listaMuebles.push(armario2);
armario2.id = listaMuebles.length;

listaMuebles.push(silla1);
silla1.id = listaMuebles.length;

listaMuebles.push(sillon1);
sillon1.id = listaMuebles.length;

listaMuebles.push(mesa1);
mesa1.id = listaMuebles.length;

listaMuebles.push(silla3);
silla3.id = listaMuebles.length;

listaMuebles.push(divan1);
divan1.id = listaMuebles.length;

listaMuebles.push(armario3);
armario3.id = listaMuebles.length;

listaMuebles.push(divan3);
divan3.id = listaMuebles.length;

listaMuebles.push(balda1);
balda1.id = listaMuebles.length;

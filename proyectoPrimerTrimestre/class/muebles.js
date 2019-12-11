class Muebles {
    constructor(marca, tamanio, precio, tipo){
        this._marca = marca;
        this._tamanio = tamanio;
        this._precio = precio;
        this._tipo = tipo;
    }

    get marca(){
        return $this._marca;
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

let mueble1 = new Muebles("Gucci", "mediano", "200€", "armario");
console.log(mueble1);
let mueble2 = new Muebles("Louis-Vuiton", "pequenio", "150€", "armario");
console.log(mueble2);
let mueble3 = new Muebles("Supreme", "grande", "2000€", "armario");
console.log(mueble3);
let mueble4 = new Muebles("Louis-Vuiton", "grande", "300€", "sillon");
console.log(mueble4);
let mueble5 = new Muebles("Silk-sill", "pequenio", "90€", "sillon");
console.log(mueble5);
let mueble6 = new Muebles("Gucci", "mediano", "150€", "sillon");
console.log(mueble6);
let mueble7 = new Muebles("Silk-sill", "mediano", "780€", "mesa");
console.log(mueble7);
let mueble8 = new Muebles("Supreme", "grande", "320€", "mesa");
console.log(mueble8);
let mueble9 = new Muebles("Gucci", "pequenio", "20€", "mesa");
console.log(mueble9);
let mueble10 = new Muebles("Gucci", "mediano", "1200€", "silla");
console.log(mueble10);
let mueble11 = new Muebles("Louis-Vuiton", "grande", "260€", "silla");
console.log(mueble11);
let mueble12 = new Muebles("Supreme", "grande", "420€", "silla");
console.log(mueble12);
let mueble13 = new Muebles("Silk-sill", "pequenio", "352€", "divan");
console.log(mueble13);
let mueble14 = new Muebles("Supreme", "mediano", "769€", "divan");
console.log(mueble14);
let mueble15 = new Muebles("Louis-Vuiton", "pequenio", "465€", "divan");
console.log(mueble15);
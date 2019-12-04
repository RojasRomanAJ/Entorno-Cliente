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
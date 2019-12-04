class Usuarios {
    constructor(nombre, apellidos, direccion, correo, usuario, password){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._direccion = direccion;
        this._correo = correo;
        this._usuario = usuario;
        this._password = password;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }

    get direccion() {
        return this._direccion;
    }

    set direccion(direccion) {
        this._direccion = direccion;
    }

    get correo() {
        return this._correo;
    }

    set correo(correo) {
        this._correo = correo;
    }

    get usuario() {
        return this._usuario;
    }

    set usuario(usuario) {
        this._usuario = usuario;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }
}
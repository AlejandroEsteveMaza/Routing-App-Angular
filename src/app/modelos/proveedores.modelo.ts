export class Proveedores {
    public id: number;
    public nombre: string;
    public apellidos: string;
    public cosa: string;

    constructor(id: number, nombre: string, apellidos: string, cosa: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cosa = cosa;
    }
}
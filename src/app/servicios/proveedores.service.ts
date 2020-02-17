import { ProveedorInt } from './../modelos/proveedor-int';
import { Proveedores } from './../modelos/proveedores.modelo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  public proveedores: Array<ProveedorInt>;
  
  constructor() {
    this.proveedores = [
      { id: 0, nombre: 'Josito', apellidos: 'Mercury', cosa: 'Londres' },
      { id: 1, nombre: 'Pedro', apellidos: 'Clapton', cosa: 'Londres' },
      { id: 2, nombre: 'Jose', apellidos: 'Hetfield', cosa: 'San Francisco' },
      { id: 3, nombre: 'Fausto', apellidos: 'Lambert', cosa: 'Los Angeles' },
      { id: 4, nombre: 'Roberto', apellidos: 'pedro', cosa: 'London' }
    ];
  }

  getProveedores() {
    return this.proveedores;
  }

  crearproveedor(value : Proveedores){
    this.proveedores.push(value);
  }
  getProveedorPorId(id){
    return this.proveedores[id];
  }
}

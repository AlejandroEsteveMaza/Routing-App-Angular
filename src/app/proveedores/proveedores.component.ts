import { Proveedores } from './../modelos/proveedores.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {


  public proveedores: Array<Proveedores>;
  public nombre1: string;
  public verFormularioModificar: boolean;
  private idPro: number;
  private nombrePro: string;
  private apellidosPro: string;
  private cosasPro: string;
  constructor() {

    this.proveedores = [
      { id: 0, nombre: 'Freddie', apellidos: 'Mercury', cosa: 'Londres' },
      { id: 1, nombre: 'Eric', apellidos: 'Clapton', cosa: 'Londres' },
      { id: 2, nombre: 'James', apellidos: 'Hetfield', cosa: 'San Francisco' },
      { id: 3, nombre: 'Adam', apellidos: 'Lambert', cosa: 'Los Angeles' },
      { id: 4, nombre: 'Robert', apellidos: 'Plant', cosa: 'London' }
    ];
    this.nombre1 = this.proveedores[1].nombre;
    this.verFormularioModificar = false;

  }

  ngOnInit() {
  }

  changeName() {

    for (var i in this.proveedores) {
      if (this.proveedores[i].id == 1) {
        this.proveedores[i].nombre = this.nombre1;
        break;
      }
    }
  }


  mostrarFormulario(id) {
    this.verFormularioModificar = true;
    this.idPro = this.proveedores[id].id;
    this.nombrePro = this.proveedores[id].nombre;
    this.apellidosPro = this.proveedores[id].apellidos;
    this.cosasPro = this.proveedores[id].cosa;
  }

  modificarProveedor() {
    
    this.proveedores[this.idPro].nombre = this.nombrePro;
    this.proveedores[this.idPro].apellidos = this.apellidosPro;
    this.proveedores[this.idPro].cosa = this.cosasPro;
    this.verFormularioModificar = false;
  }
}

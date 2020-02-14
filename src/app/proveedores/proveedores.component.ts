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
  constructor() {
    this.nombre1 = "Josito1";
    this.proveedores = [
      { id: 0, nombre: 'Freddie', apellidos: 'Mercury', cosa: 'Londres' },
      { id: 1, nombre: 'Eric', apellidos: 'Clapton', cosa: 'Londres' },
      { id: 2, nombre: 'James', apellidos: 'Hetfield', cosa: 'San Francisco' },
      { id: 3, nombre: 'Adam', apellidos: 'Lambert', cosa: 'Los Angeles' },
      { id: 4, nombre: 'Robert', apellidos: 'Plant', cosa: 'London' }
    ];

  }

  ngOnInit() {
  }

  changeName(){
    this.nombre1 = this.nombre1;
    this.proveedores.splice(1, 1, this.nombre1);
  } 
}

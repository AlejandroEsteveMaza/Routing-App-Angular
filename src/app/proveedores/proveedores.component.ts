import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  public nombre : string;
  constructor() { 
    this.nombre = "Josito1";
  }

  ngOnInit() {
  }

  /* changeName(){
    this.nombre = this.nombre;
  } */
}

import { Component, OnInit } from '@angular/core';
import { Proveedores } from 'src/app/modelos/proveedores.modelo';

@Component({
  selector: 'app-padre-proveedores',
  templateUrl: './padre-proveedores.component.html',
  styleUrls: ['./padre-proveedores.component.css']
})
export class PadreProveedoresComponent implements OnInit {
  private mensajePadre : String;
  public nombre : String
  constructor() { 
    this.nombre = "JositoPadre";
   
  }

  ngOnInit() {
  }

}
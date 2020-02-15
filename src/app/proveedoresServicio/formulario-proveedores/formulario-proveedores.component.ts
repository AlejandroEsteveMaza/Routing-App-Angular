import { ProveedoresService } from './../../servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';
import { Proveedores } from 'src/app/modelos/proveedores.modelo';

@Component({
  selector: 'app-formulario-proveedores',
  templateUrl: './formulario-proveedores.component.html',
  styleUrls: ['./formulario-proveedores.component.css']
})
export class FormularioProveedoresComponent implements OnInit {
  private verFormularioModificar : any;

  private idPro: number;
  private nombrePro: string;
  private apellidosPro: string;
  private cosasPro: string;

  constructor(private ProveedoresService: ProveedoresService) {
   }

  ngOnInit() {
  }
  
  addProveedor(){
    var proveedor : Proveedores= {id: this.idPro ,nombre: this.nombrePro, apellidos: this.apellidosPro, cosa: this.cosasPro };
    this.ProveedoresService.crearproveedor(proveedor);
  }
  

}

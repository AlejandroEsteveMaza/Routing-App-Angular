import { ProveedoresService } from './../../servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-proveedores',
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.css']
})
export class TablaProveedoresComponent implements OnInit {
  proveedoresServicio: any;

  constructor(private ProveedoresService: ProveedoresService, private router:Router) { 
    this.proveedoresServicio = this.ProveedoresService.getProveedores();
  }

  ngOnInit() {
  }

  verProveedor(id){
    this.router.navigate(["services-proveedores",id]);
  }

}

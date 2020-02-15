import { ProveedoresService } from './../../servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proveedores } from 'src/app/modelos/proveedores.modelo';

@Component({
  selector: 'app-detail-proveedores',
  templateUrl: './detail-proveedores.component.html',
  styleUrls: ['./detail-proveedores.component.css']
})
export class DetailProveedoresComponent implements OnInit {

  private id : number;
  private proveedor : Proveedores;
  constructor(private route :ActivatedRoute , private ProveedoresService: ProveedoresService) {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
   }

  ngOnInit() {
    this.proveedor = this.ProveedoresService.getProveedorPorId(this.id);
  }

}

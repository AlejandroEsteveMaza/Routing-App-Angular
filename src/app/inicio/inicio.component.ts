import { MostrarNavService } from './../mostrar-nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private mostrarHeader: MostrarNavService) { }

  ngOnInit() {
    
  }
  changeMostrarNav() {   
    this.mostrarHeader.setMostratNav();
    console.log(this.mostrarHeader.getMostratNav());
  }



}

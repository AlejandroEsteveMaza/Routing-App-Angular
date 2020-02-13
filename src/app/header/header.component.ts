import { MostrarNavService } from './../mostrar-nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public  mostrarNav: boolean;
  constructor(private mostrarHeaderService: MostrarNavService) { 
    this.mostrarNav = this.mostrarHeaderService.getMostratNav();
  }

  ngOnInit() {
    this.mostrarNav = this.mostrarHeaderService.getMostratNav();
  }

 

}

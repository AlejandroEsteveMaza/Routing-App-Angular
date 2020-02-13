import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarNavService {
  public mostrarNav : boolean;
  
  constructor() { 
    this.mostrarNav = true;
  }

  setMostratNav() {
    this.mostrarNav = !this.mostrarNav;
  }
  getMostratNav(){
    return this.mostrarNav;
  }
}

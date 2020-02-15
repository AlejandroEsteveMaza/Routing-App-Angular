import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-proveedores',
  templateUrl: './hijo-proveedores.component.html',
  styleUrls: ['./hijo-proveedores.component.css']
})
export class HijoProveedoresComponent implements OnInit {
  @Input('parentData') public parentName;
  @Output() public hijoEvent = new EventEmitter();
 private varEnviadaApadre :String;
  constructor() { 
    this.varEnviadaApadre= "De Hijo A Padre";
  }

  ngOnInit() {
  }

  fireEvent(){
    this.hijoEvent.emit(this.varEnviadaApadre);
  }

}

import { InicioComponent } from './inicio/inicio.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'proveedores', component: ProveedoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

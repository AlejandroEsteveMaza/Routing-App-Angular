import { PadreProveedoresComponent } from './proveedoresPadreHijo/padre-proveedores/padre-proveedores.component';
import { DetailProveedoresComponent } from './proveedoresServicio/detail-proveedores/detail-proveedores.component';
import { TablaProveedoresComponent } from './proveedoresServicio/tabla-proveedores/tabla-proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'proveedores', component: ProveedoresComponent},
  { path: 'services-proveedores', component: TablaProveedoresComponent},
  { path: 'services-proveedores/:id', component: DetailProveedoresComponent},
  { path: 'padre-hijo', component: PadreProveedoresComponent},
  { path: '**', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

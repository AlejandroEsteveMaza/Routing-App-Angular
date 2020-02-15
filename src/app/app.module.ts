import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { TablaProveedoresComponent } from './proveedoresServicio/tabla-proveedores/tabla-proveedores.component';
import { FormularioProveedoresComponent } from './proveedoresServicio/formulario-proveedores/formulario-proveedores.component';
import { DetailProveedoresComponent } from './proveedoresServicio/detail-proveedores/detail-proveedores.component';
import { PadreProveedoresComponent } from './proveedoresPadreHijo/padre-proveedores/padre-proveedores.component';
import { HijoProveedoresComponent } from './proveedoresPadreHijo/hijo-proveedores/hijo-proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    TablaProveedoresComponent,
    FormularioProveedoresComponent,
    DetailProveedoresComponent,
    PadreProveedoresComponent,
    HijoProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TabelaConverteMoedaComponent } from './tabela-converte-moeda/tabela-converte-moeda.component';
import { TelaCambioComponent } from './tela-cambio/tela-cambio.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TabelaConverteMoedaComponent,
    TelaCambioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TesteComponent } from './teste/teste.component';
import { Teste2Component } from './teste2/teste2.component';
import { Erro404Component } from './erro404/erro404.component';
import { FilhoComponent } from './filho/filho.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    Teste2Component,
    Erro404Component,
    FilhoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

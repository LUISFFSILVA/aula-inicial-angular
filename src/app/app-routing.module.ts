import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { Teste2Component } from './teste2/teste2.component';
import { Erro404Component } from './erro404/erro404.component';

const routes: Routes = [
  {
    path: '',
    component: TesteComponent
  },
  {
    path: 'teste',
    component: TesteComponent
  },
  {
    path: 'teste2/:nome',
    component: Teste2Component
  },
  {
    path: '**',
    component: Erro404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtendimentoModule } from './atendimentos/atendimento.module';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'atendimentos',
    loadChildren: () => import('./atendimentos/atendimento.module').then(m => m.AtendimentoModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { PacienteModule } from './pacientes/paciente.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { authGuard } from './authentication/guard.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'atendimentos',
    loadChildren: () => import('./atendimentos/atendimento.module').then(m => m.AtendimentoModule),
    canActivate: [authGuard]
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate: [authGuard]
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pacientes/paciente.module').then(m => m.PacienteModule),
    canActivate: [authGuard]
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

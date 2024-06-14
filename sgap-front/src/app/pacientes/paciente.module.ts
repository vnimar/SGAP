import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ListaPacientesComponent } from "./lista-pacientes/lista-pacientes.component";
import { PacienteRoutingModule } from "./paciente-routing.module";
import { CadastroPacientesComponent } from './lista-pacientes/cadastro-pacientes/cadastro-pacientes.component';
import { EdicaoPacientesComponent } from './lista-pacientes/edicao-pacientes/edicao-pacientes.component';

@NgModule({
  declarations: [
    ListaPacientesComponent,
    CadastroPacientesComponent,
    EdicaoPacientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PacienteRoutingModule
  ],
  exports: [
    ListaPacientesComponent
  ]
})

export class PacienteModule {}

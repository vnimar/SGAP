import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaPacientesComponent } from "./lista-pacientes/lista-pacientes.component";
import { CadastroPacientesComponent } from "./lista-pacientes/cadastro-pacientes/cadastro-pacientes.component";
import { EdicaoPacientesComponent } from "./lista-pacientes/edicao-pacientes/edicao-pacientes.component";

const routes: Routes = [
  {
    path: 'lista',
    component: ListaPacientesComponent
  },
  {
    path: 'cadastrar',
    component: CadastroPacientesComponent
  },
  {
    path: 'editar/:id',
    component: EdicaoPacientesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule {}

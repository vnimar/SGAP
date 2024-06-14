import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaPacientesComponent } from "./lista-pacientes/lista-pacientes.component";

const routes: Routes = [
  {
    path: 'lista',
    component: ListaPacientesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule {}

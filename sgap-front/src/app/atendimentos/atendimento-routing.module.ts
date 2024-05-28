import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CadastroAtendimentosComponent } from "./lista-atendimentos/cadastro-atendimentos/cadastro-atendimentos.component";
import { EdicaoAtendimentosComponent } from "./lista-atendimentos/edicao-atendimentos/edicao-atendimentos.component";
import { ListaAtendimentosComponent } from "./lista-atendimentos/lista-atendimentos.component";

const routes: Routes = [
  {
    path: 'lista',
    component: ListaAtendimentosComponent
  },
  {
    path: 'cadastrar',
    component: CadastroAtendimentosComponent
  },
  {
    path: 'editar/:id',
    component: EdicaoAtendimentosComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }

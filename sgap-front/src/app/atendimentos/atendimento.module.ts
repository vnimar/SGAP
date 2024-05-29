import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { AtendimentoRoutingModule } from "./atendimento-routing.module";
import { CadastroAtendimentosComponent } from "./lista-atendimentos/cadastro-atendimentos/cadastro-atendimentos.component";
import { ListaAtendimentosComponent } from "./lista-atendimentos/lista-atendimentos.component";
import { EdicaoAtendimentosComponent } from "./lista-atendimentos/edicao-atendimentos/edicao-atendimentos.component";

@NgModule({
  declarations: [
    ListaAtendimentosComponent,
    CadastroAtendimentosComponent,
    EdicaoAtendimentosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AtendimentoRoutingModule
  ],
  exports: [
    ListaAtendimentosComponent,
    CadastroAtendimentosComponent,
    EdicaoAtendimentosComponent
  ]
})

export class AtendimentoModule {}

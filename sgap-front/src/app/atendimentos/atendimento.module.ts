import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { AtendimentoRoutingModule } from "./atendimento-routing.module";
import { CadastroAtendimentosComponent } from "./lista-atendimentos/cadastro-atendimentos/cadastro-atendimentos.component";
import { ListaAtendimentosComponent } from "./lista-atendimentos/lista-atendimentos.component";

@NgModule({
  declarations: [
    ListaAtendimentosComponent,
    CadastroAtendimentosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AtendimentoRoutingModule
  ],
  exports: [
    ListaAtendimentosComponent,
    CadastroAtendimentosComponent,
  ]
})

export class AtendimentoModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CardLoginComponent } from "./card-login/card-login.component";
import { MensagemErroComponent } from "./mensagem-erro/mensagem-erro.component";
import { BotaoHamburguerComponent } from "./toolbar/menu-lateral/botao-hamburguer/botao-hamburguer.component";
import { MenuLateralComponent } from "./toolbar/menu-lateral/menu-lateral.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { FormAtendimentoComponent } from './form-atendimento/form-atendimento.component';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';

@NgModule({
  declarations: [
    CardLoginComponent,
    ToolbarComponent,
    BotaoHamburguerComponent,
    MenuLateralComponent,
    MensagemErroComponent,
    FormAtendimentoComponent,
    FormFuncionarioComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CardLoginComponent,
    ToolbarComponent,
    BotaoHamburguerComponent,
    MenuLateralComponent,
    MensagemErroComponent,
    FormAtendimentoComponent,
    FormFuncionarioComponent
  ]
})

export class SharedModule {}

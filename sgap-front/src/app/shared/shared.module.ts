import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CardLoginComponent } from "./card-login/card-login.component";
import { MensagemErroComponent } from "./mensagem-erro/mensagem-erro.component";
import { BotaoHamburguerComponent } from "./toolbar/menu-lateral/botao-hamburguer/botao-hamburguer.component";
import { MenuLateralComponent } from "./toolbar/menu-lateral/menu-lateral.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@NgModule({
  declarations: [
    CardLoginComponent,
    ToolbarComponent,
    BotaoHamburguerComponent,
    MenuLateralComponent,
    MensagemErroComponent,
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
  ]
})

export class SharedModule {}

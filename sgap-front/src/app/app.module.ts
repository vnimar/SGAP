import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CardLoginComponent } from './shared/card-login/card-login.component';
import { ListaAtendimentosComponent } from './pages/lista-atendimentos/lista-atendimentos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MensagemErroComponent } from './shared/mensagem-erro/mensagem-erro.component';
import { BotaoHamburguerComponent } from './shared/botao-hamburguer/botao-hamburguer.component';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardLoginComponent,
    ListaAtendimentosComponent,
    ToolbarComponent,
    MensagemErroComponent,
    BotaoHamburguerComponent,
    MenuLateralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

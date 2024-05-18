import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAtendimentosComponent } from './pages/lista-atendimentos/lista-atendimentos.component';
import { LoginComponent } from './pages/login/login.component';
import { BotaoHamburguerComponent } from './shared/toolbar/menu-lateral/botao-hamburguer/botao-hamburguer.component';
import { CardLoginComponent } from './shared/card-login/card-login.component';
import { MensagemErroComponent } from './shared/mensagem-erro/mensagem-erro.component';
import { MenuLateralComponent } from './shared/toolbar/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { PageNotFoundComponent } from './core/erro/page-not-found/page-not-found.component';
import { ErrosInterceptor } from './core/erro/erros.interceptor';

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
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrosInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

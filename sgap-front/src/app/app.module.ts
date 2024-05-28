import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrosInterceptor } from './core/erro/erros.interceptor';
import { ListaAtendimentosComponent } from './atendimentos/lista-atendimentos/lista-atendimentos.component';
import { LoginComponent } from './authentication/login/login.component';
import { SharedModule } from './shared/shared.module';
import { ErroModule } from './core/erro/erro.module';
import { CadastroAtendimentosComponent } from './atendimentos/lista-atendimentos/cadastro-atendimentos/cadastro-atendimentos.component';
import { UserEditComponent } from './authentication/user-edit/user-edit.component';
import { UserCreateComponent } from './authentication/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaAtendimentosComponent,
    CadastroAtendimentosComponent,
    UserEditComponent,
    UserCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ErroModule
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

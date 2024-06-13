import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Funcionario } from 'src/app/core/types/funcionario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<Funcionario | null>(null);

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }
  }

  private decodificarJWT(){
    const token = this.tokenService.retornarToken();
    const usuario = jwtDecode(token) as Funcionario;
    this.userSubject.next(usuario);
  }

  salvarToken(token: string): void {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  retornarUsuario() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}

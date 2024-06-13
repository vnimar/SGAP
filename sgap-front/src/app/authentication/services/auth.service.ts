import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Funcionario } from 'src/app/core/types/funcionario';
import { environment } from 'src/environment/environment.development';
import { UserService } from './user.service';

interface AuthResponse {
  access_token: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = environment.API;

  constructor(private http: HttpClient, private userService: UserService) { }

  login(funcionario: Funcionario): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`${this.API}/auth/login`, funcionario, { observe: 'response' })
      .pipe(
        tap((response) => {
          const authToken = response.body?.access_token || '';
          this.userService.salvarToken(authToken);
        })
      )
  }

  cadastro(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.API}/auth/register`, funcionario);
  }

  edicao(id: string, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.API}/auth/update/${id}`, funcionario);
  }
}

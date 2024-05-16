import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atendimento } from '../types/atendimento';
import { environment } from 'src/environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  public cadastrarAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(`${this.API}/atendimento`, atendimento);
  }

  public listarAtendimentos(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.API}/atendimento`);
  }
}

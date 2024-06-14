import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atendimento } from 'src/app/core/types/atendimento';
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

  public consultarAtendimento(id: string): Observable<Atendimento> {
    return this.http.get<Atendimento>(`${this.API}/atendimento/${id}`);
  }

  public listarAtendimentos(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.API}/atendimento`);
  }

  public excluirAtendimento(id: string): Observable<Atendimento> {
    return this.http.delete<Atendimento>(`${this.API}/atendimento/${id}`);
  }

  public atualizarAtendimento(id: string, atendimento: Atendimento): Observable<Atendimento> {
    return this.http.put<Atendimento>(`${this.API}/atendimento/${id}`, atendimento);
  }
}

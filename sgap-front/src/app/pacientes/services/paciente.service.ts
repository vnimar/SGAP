import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/core/types/paciente';
import { environment } from 'src/environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  public cadastrarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${this.API}/paciente`, paciente);
  }

  public consultarPaciente(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.API}/paciente/${id}`);
  }

  public listarPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.API}/paciente`);
  }

  public excluirPaciente(id: string): Observable<Paciente> {
    return this.http.delete<Paciente>(`${this.API}/paciente/${id}`);
  }

  public atualizarPaciente(id: string, paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.API}/paciente/${id}`, paciente);
  }
}

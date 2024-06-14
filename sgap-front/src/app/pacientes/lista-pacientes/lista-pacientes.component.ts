import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/core/types/paciente';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit{
  listaPacientes: Paciente[] = [];

  constructor(private pacientesService: PacienteService){}

  ngOnInit(): void {
    this.pacientesService.listarPacientes().subscribe({
      next: (listaPacientes) => {
        this.listaPacientes = listaPacientes;
      }
    })
  }
}

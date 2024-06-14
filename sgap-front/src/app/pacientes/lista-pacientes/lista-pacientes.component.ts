import { Component } from '@angular/core';
import { Paciente } from 'src/app/core/types/paciente';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent {
  listaPacientes: Paciente[] = [];
}

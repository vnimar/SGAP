import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-atendimentos',
  templateUrl: './lista-atendimentos.component.html',
  styleUrls: ['./lista-atendimentos.component.scss']
})
export class ListaAtendimentosComponent {
  listaAtendimentos = [
    { horario: '14:00', paciente: 'Sávio Alcantara', medico: 'Juscelino Silva', consulta: 'Ortopedia' },
    { horario: '15:00', paciente: 'Maria Oliveira', medico: 'João Santos', consulta: 'Cardiologia' },
  ]
}

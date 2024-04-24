import { Component } from '@angular/core';
import { Atendimento } from 'src/app/core/types/atendimento';

@Component({
  selector: 'app-lista-atendimentos',
  templateUrl: './lista-atendimentos.component.html',
  styleUrls: ['./lista-atendimentos.component.scss']
})
export class ListaAtendimentosComponent {
  listaAtendimentos: Atendimento[] = [
    { id: 1, horario: '14:00', paciente: 'Sávio Alcantara', medico: 'Juscelino Silva', consulta: 'Ortopedia' },
    { id: 2, horario: '15:00', paciente: 'Maria Oliveira', medico: 'João Santos', consulta: 'Cardiologia' },
  ]
}

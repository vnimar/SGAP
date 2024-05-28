import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/core/types/atendimento';
import { AtendimentoService } from '../services/atendimento.service';

@Component({
  selector: 'app-lista-atendimentos',
  templateUrl: './lista-atendimentos.component.html',
  styleUrls: ['./lista-atendimentos.component.scss']
})
export class ListaAtendimentosComponent implements OnInit {
  listaAtendimentos: Atendimento[] = [
    //   { id: 1, horario: '14:00', paciente: 'Sávio Alcantara', medico: 'Juscelino Silva', consulta: 'Ortopedia' },
    //   { id: 2, horario: '15:00', paciente: 'Maria Oliveira', medico: 'João Santos', consulta: 'Cardiologia' },
  ]

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.atendimentoService.listarAtendimentos().subscribe({
      next: (resp) => {
        this.listaAtendimentos = resp;
      },
      error: () => {
        alert("Erro ao consultar lista!");
      }
    });
  }

  criar() {
    const atendimento1: Atendimento = {
      id: 0,
      horario: new Date().toISOString(), // Converte para o formato de string desejado
      tipo: 'atendimento normal ',
      observacao: 'nenhuma',
    };

    this.atendimentoService.cadastrarAtendimento(atendimento1).subscribe({
      next: () => {
        alert("Sucesso ao criar atendimento!");
        window.location.reload();
      },
      error: () => {
        alert("Erro ao criar atendimento!");
      }
    });
  }
}

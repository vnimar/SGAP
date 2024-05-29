import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/core/types/atendimento';
import { AtendimentoService } from '../services/atendimento.service';

@Component({
  selector: 'app-lista-atendimentos',
  templateUrl: './lista-atendimentos.component.html',
  styleUrls: ['./lista-atendimentos.component.scss']
})
export class ListaAtendimentosComponent implements OnInit {
  listaAtendimentos: Atendimento[] = [];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
    this.atendimentoService.listarAtendimentos().subscribe({
      next: (resp) => {
        this.listaAtendimentos = resp;
      },
      error: () => {
        alert("Erro ao consultar lista!");
      }
    });
  }
}

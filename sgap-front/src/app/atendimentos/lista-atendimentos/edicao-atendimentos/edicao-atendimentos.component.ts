import { Atendimento } from './../../../core/types/atendimento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from '../../services/atendimento.service';
import { FormsService } from 'src/app/core/services/forms.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edicao-atendimentos',
  templateUrl: './edicao-atendimentos.component.html',
  styleUrls: ['./edicao-atendimentos.component.scss']
})
export class EdicaoAtendimentosComponent implements OnInit {
  formAtendimento!: FormGroup | null;
  atendimento!: Atendimento;

  constructor(
    private route: ActivatedRoute,
    private atendimentoService: AtendimentoService,
    private formsService: FormsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idAtendimento = this.route.snapshot.paramMap.get('id') as string;

    this.atendimentoService.consultarAtendimento(idAtendimento).subscribe({
      next: (atendimentoEncontrado) => {
        this.atendimento = atendimentoEncontrado;
        this.carregarFormulario();
      }
    })
  }

  carregarFormulario() {
    this.formAtendimento = this.formsService.getForm();
    this.formAtendimento.patchValue({
      id: this.atendimento.id,
      horario: this.atendimento.horario,
      tipo: this.atendimento.tipo,
      observacao: this.atendimento.observacao
    });
  }

  editarAtendimento() {
    const dadosAtualizados: Atendimento = {
      id: this.atendimento.id,
      horario: this.formAtendimento?.value.horario,
      tipo: this.formAtendimento?.value.tipo,
      observacao: this.formAtendimento?.value.observacao
    }

    this.atendimentoService.atualizarAtendimento(this.atendimento.id, dadosAtualizados).subscribe({
      next: () => {
        this.router.navigate(['/atendimentos/lista']);
      }
    });
  }

  excluirAtendimento() {
    this.atendimentoService.excluirAtendimento(this.atendimento.id).subscribe({
      next: () => {
        this.router.navigate(['/atendimentos/lista']);
      }
    });
  }
}

import { Component } from '@angular/core';
import { FormsService } from 'src/app/core/services/forms.service';
import { Atendimento } from 'src/app/core/types/atendimento';
import { AtendimentoService } from '../../services/atendimento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-atendimentos',
  templateUrl: './cadastro-atendimentos.component.html',
  styleUrls: ['./cadastro-atendimentos.component.scss']
})
export class CadastroAtendimentosComponent {
  novoAtendimento!: Atendimento;

  constructor(
    private formsService: FormsService,
    private atendimentoService: AtendimentoService,
    private router: Router
  ){}

  cadastrar(): void {
    const formAtendimento = this.formsService.getForm();

    if(formAtendimento?.valid){
      this.novoAtendimento = formAtendimento.getRawValue() as Atendimento;
          const formData = {
            horario: this.novoAtendimento.horario,
            tipo: this.novoAtendimento.tipo,
            observacao: this.novoAtendimento.observacao,
            medico: { id: this.novoAtendimento.medico },
            paciente: { id: this.novoAtendimento.paciente }
          };

      this.atendimentoService.cadastrarAtendimento(this.novoAtendimento).subscribe({
        next: () => {
          this.router.navigate(['/atendimentos/lista']);
        }
      })
    }
  }
}

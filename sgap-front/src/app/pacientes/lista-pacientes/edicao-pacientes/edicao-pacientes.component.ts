import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from 'src/app/core/services/forms.service';
import { Paciente } from 'src/app/core/types/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-edicao-pacientes',
  templateUrl: './edicao-pacientes.component.html',
  styleUrls: ['./edicao-pacientes.component.scss']
})
export class EdicaoPacientesComponent {
  formPaciente!: FormGroup | null;
  paciente!: Paciente;

  constructor(
    private route: ActivatedRoute,
    private pacientesService: PacienteService,
    private formsService: FormsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idPaciente = this.route.snapshot.paramMap.get('id') as string;

    this.pacientesService.consultarPaciente(idPaciente).subscribe({
      next: (funcionarioEcontrado) => {
        this.paciente = funcionarioEcontrado;
        this.carregarFormulario();
      }
    })
  }

  carregarFormulario() {
    this.formPaciente = this.formsService.getForm();

    this.formPaciente.patchValue({
      id: this.paciente.id,
      nome: this.paciente.nome,
      email: this.paciente.email,
      telefone: this.paciente.telefone,
    });
  }

  editarFuncionario() {
    const dadosAtualizados: Paciente = {
      id: this.paciente.id,
      nome: this.formPaciente?.value.nome,
      email: this.formPaciente?.value.email,
      telefone: this.formPaciente?.value.telefone,
    }

    this.pacientesService.atualizarPaciente(this.paciente.id, dadosAtualizados).subscribe({
      next: () => {
        this.router.navigate(['/pacientes/lista']);
      }
    });
  }

  excluirPaciente() {
    this.pacientesService.excluirPaciente(this.paciente.id).subscribe({
      next: () => {
        this.router.navigate(['/pacientes/lista']);
      }
    });
  }
}

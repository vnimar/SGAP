import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/core/services/forms.service';
import { Paciente } from 'src/app/core/types/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.component.html',
  styleUrls: ['./cadastro-pacientes.component.scss']
})
export class CadastroPacientesComponent {
  novoPaciente!: Paciente;

  constructor(
    private formsService: FormsService,
    private pacienteService: PacienteService,
    private router: Router
  ){}

  cadastrar(): void {
    const formAtendimento = this.formsService.getForm();

    if(formAtendimento?.valid){
      this.novoPaciente = formAtendimento.getRawValue() as Paciente;

      this.pacienteService.cadastrarPaciente(this.novoPaciente).subscribe({
        next: () => {
          alert('Cadastrado com sucesso!');
          this.router.navigate(['/pacientes/lista']);
        }
      })
    }
  }
}

import { Component } from '@angular/core';
import { Funcionario } from 'src/app/core/types/funcionario';
import { AuthService } from '../services/auth.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/core/services/forms.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  formAtendimento!: FormGroup | null;
  funcionario!: Funcionario;

  constructor(
    private funcionarioService: AuthService,
    private formsService: FormsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.funcionarioService.buscarMeuUsuario().subscribe({
      next: (funcionarioEcontrado) => {
        this.funcionario = funcionarioEcontrado;
        this.carregarFormulario();
      }
    })
  }

  carregarFormulario() {
    this.formAtendimento = this.formsService.getForm();
    console.log(this.funcionario);

    this.formAtendimento.patchValue({
      id: this.funcionario.id,
      nome: this.funcionario.nome,
      email: this.funcionario.email,
      telefone: this.funcionario.telefone,
      cargo: this.funcionario.cargo
    });
  }

  editarFuncionario() {
    const dadosAtualizados: Funcionario = {
      id: this.funcionario.id,
      nome: this.formAtendimento?.value.nome,
      email: this.formAtendimento?.value.email,
      telefone: this.formAtendimento?.value.telefone,
      senha: this.formAtendimento?.value.senha,
      cargo: this.formAtendimento?.value.cargo
    }

    this.funcionarioService.edicao(this.funcionario.id, dadosAtualizados).subscribe({
      next: () => {
        this.router.navigate(['/atendimentos/lista']);
      }
    });
  }
}

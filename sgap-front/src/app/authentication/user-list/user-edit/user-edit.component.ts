import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from 'src/app/core/services/forms.service';
import { Funcionario } from 'src/app/core/types/funcionario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  formAtendimento!: FormGroup | null;
  funcionario!: Funcionario;

  constructor(
    private route: ActivatedRoute,
    private funcionarioService: AuthService,
    private formsService: FormsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idFuncionario = this.route.snapshot.paramMap.get('id') as string;

    this.funcionarioService.buscarFuncionario(idFuncionario).subscribe({
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
      senha: this.funcionario.senha,
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

    console.log(this.funcionario.id);

    this.funcionarioService.edicao(this.funcionario.id, dadosAtualizados).subscribe({
      next: () => {
        this.router.navigate(['/atendimentos/lista']);
      }
    });
  }

  // excluirAtendimento() {
  //   this.funcionarioService.excluirAtendimento(this.funcionario.id).subscribe({
  //     next: () => {
  //       this.router.navigate(['/atendimentos/lista']);
  //     }
  //   });
  // }
}

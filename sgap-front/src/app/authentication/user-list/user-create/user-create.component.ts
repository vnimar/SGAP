import { Component } from '@angular/core';
import { FormsService } from 'src/app/core/services/forms.service';
import { Funcionario } from 'src/app/core/types/funcionario';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  novoFuncionario!: Funcionario;

  constructor(
    private formsService: FormsService,
    private funcionarioService: AuthService,
    private router: Router
  ){}

  cadastrar(): void {
    const formAtendimento = this.formsService.getForm();

    if(formAtendimento?.valid){
      this.novoFuncionario = formAtendimento.getRawValue() as Funcionario;

      this.funcionarioService.cadastro(this.novoFuncionario).subscribe({
        next: () => {
          alert('Cadastrado com sucesso!');
          this.router.navigate(['/funcionarios/lista']);
        }
      })
    }
  }
}

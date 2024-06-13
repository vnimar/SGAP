import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/core/services/forms.service';
import { AuthService } from '../services/auth.service';
import { Funcionario } from 'src/app/core/types/funcionario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private formsService: FormsService,
    private authService: AuthService,
    private router: Router
  ) {}

  login(){
    const loginForm = this.formsService.getForm();

    if(loginForm?.valid){
      const login = loginForm.getRawValue() as Funcionario;

      this.authService.login(login).subscribe({
        next: () => {
          alert('Bem-vindo!');
          this.router.navigate(['/atendimentos/lista']);
        }
      });
    }
  }
}

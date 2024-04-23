import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/core/services/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private formsService: FormsService,
    private router: Router
  ) {}

  login(){
    const loginForm = this.formsService.getForm();

    if(loginForm?.valid){
      this.router.navigate(['/lista-atendimentos']);
    }
  }
}

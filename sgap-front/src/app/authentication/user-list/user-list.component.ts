import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/core/types/funcionario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  listaFuncionarios: Funcionario[] = [];

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.userService.listar().subscribe({
      next: (listaFuncionarios) => {
        this.listaFuncionarios = listaFuncionarios;
      }
    })
  }
}

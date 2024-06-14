import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsService } from 'src/app/core/services/forms.service';
import { Cargo } from 'src/app/core/types/funcionario';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.scss']
})
export class FormFuncionarioComponent {
  formFuncionario!: FormGroup;
  @Input() editComponent = false;
  @Output() acaoClique: EventEmitter<void> = new EventEmitter<void>();
  @Output() cliqueExcluir: EventEmitter<void> = new EventEmitter<void>();
  cargos: Cargo[] = [
    {id: 1, tipo: 'Atendente'},
    {id: 2, tipo: 'Médico'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService,
  ) { }

  ngOnInit(): void {
    this.formFuncionario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null],
      senha: [null, Validators.required],
      cargo: [null]
    });

    this.formsService.setForm(this.formFuncionario);
  }

  executarAcao() {
    this.acaoClique.emit();
  }

  excluir() {
    this.cliqueExcluir.emit();
  }
}

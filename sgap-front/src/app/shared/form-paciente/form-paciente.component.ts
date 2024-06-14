import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsService } from 'src/app/core/services/forms.service';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss']
})
export class FormPacienteComponent implements OnInit {
  formPaciente!: FormGroup;
  @Input() editComponent = false;
  @Output() acaoClique: EventEmitter<void> = new EventEmitter<void>();
  @Output() cliqueExcluir: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService,
  ) { }

  ngOnInit(): void {
    this.formPaciente = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null],
    });

    this.formsService.setForm(this.formPaciente);
  }

  executarAcao() {
    this.acaoClique.emit();
  }

  excluir() {
    this.cliqueExcluir.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/core/services/forms.service';

@Component({
  selector: 'app-form-atendimento',
  templateUrl: './form-atendimento.component.html',
  styleUrls: ['./form-atendimento.component.scss']
})
export class FormAtendimentoComponent {
  formAtendimento!: FormGroup;
  @Input() editComponent = false;
  @Output() acaoClique: EventEmitter<void> = new EventEmitter<void>();
  @Output() cliqueExcluir: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService,
  ) { }

  ngOnInit(): void {
    this.formAtendimento = this.formBuilder.group({
      horario: [null, Validators.required],
      tipo: [null, Validators.required],
    });

    this.formsService.setForm(this.formAtendimento);
  }

  executarAcao() {
    this.acaoClique.emit();
  }

  excluir() {
    this.cliqueExcluir.emit();
  }
}

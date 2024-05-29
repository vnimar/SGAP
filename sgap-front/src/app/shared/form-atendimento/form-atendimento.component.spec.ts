import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAtendimentoComponent } from './form-atendimento.component';

describe('FormAtendimentoComponent', () => {
  let component: FormAtendimentoComponent;
  let fixture: ComponentFixture<FormAtendimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAtendimentoComponent]
    });
    fixture = TestBed.createComponent(FormAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPacientesComponent } from './edicao-pacientes.component';

describe('EdicaoPacientesComponent', () => {
  let component: EdicaoPacientesComponent;
  let fixture: ComponentFixture<EdicaoPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoPacientesComponent]
    });
    fixture = TestBed.createComponent(EdicaoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

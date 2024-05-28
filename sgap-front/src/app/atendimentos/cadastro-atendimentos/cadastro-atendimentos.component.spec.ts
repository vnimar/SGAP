import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAtendimentosComponent } from './cadastro-atendimentos.component';

describe('CadastroAtendimentosComponent', () => {
  let component: CadastroAtendimentosComponent;
  let fixture: ComponentFixture<CadastroAtendimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAtendimentosComponent]
    });
    fixture = TestBed.createComponent(CadastroAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

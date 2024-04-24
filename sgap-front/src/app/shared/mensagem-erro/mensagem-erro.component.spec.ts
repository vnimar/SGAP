import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemErroComponent } from './mensagem-erro.component';

describe('MensagemErroComponent', () => {
  let component: MensagemErroComponent;
  let fixture: ComponentFixture<MensagemErroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensagemErroComponent]
    });
    fixture = TestBed.createComponent(MensagemErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

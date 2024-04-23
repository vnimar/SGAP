import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtendimentosComponent } from './lista-atendimentos.component';

describe('ListaAtendimentosComponent', () => {
  let component: ListaAtendimentosComponent;
  let fixture: ComponentFixture<ListaAtendimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAtendimentosComponent]
    });
    fixture = TestBed.createComponent(ListaAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

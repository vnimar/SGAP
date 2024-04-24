import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoHamburguerComponent } from './botao-hamburguer.component';

describe('BotaoHamburguerComponent', () => {
  let component: BotaoHamburguerComponent;
  let fixture: ComponentFixture<BotaoHamburguerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoHamburguerComponent]
    });
    fixture = TestBed.createComponent(BotaoHamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-hamburguer',
  templateUrl: './botao-hamburguer.component.html',
  styleUrls: ['./botao-hamburguer.component.scss']
})
export class BotaoHamburguerComponent {
  isRotated = false;

  toggleRotate() {
    this.isRotated = !this.isRotated;
  }
}

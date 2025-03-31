import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  // Lista 2 - Exercicio 01 - Variaveis
  alertButtons = ['OK'];
  ValorCarro = 0;
  valorRodados = 0;
  valorFinal = 0;
  carro = '';
  valorMotorista = 0;
  valorApp = 0;

  // Lista 2 - Exercicio 02 - Variaveis

  tipoGasolina: string = '';
  precoLitro: number = 0;
  KmRodados: number = 0;
  mediaKm: number = 0;

  valorViagem() {

  // Logica do Exercicio 01

    switch (this.carro) {
      case 'normal':
        this.valorFinal = this.valorRodados * 2.50 + 5
        break;
      case 'superior':
        this.valorFinal = this.valorRodados * 3.50 + 7.50;
        break;
      case 'vip':
        this.valorFinal = this.valorRodados * 5.50 + 10;
        break;
    }

    if (this.valorFinal > 150) {
      this.valorMotorista = this.valorFinal * (80 / 100);
      this.valorApp = this.valorFinal * (20 / 100);
    } else {
      this.valorMotorista = this.valorFinal * (75 / 100);
      this.valorApp = this.valorFinal * (25 / 100);
    }
  }

  // Logica do Exercicio 02

  calcularValor() {
    switch (this.tipoGasolina) {
      case 'etanol':
        return this.valorFinal = (this.KmRodados / 9) * this.precoLitro
        break;
      case 'gasolina':
        return this.valorFinal = (this.KmRodados / 12) * this.precoLitro;
        break;
      case 'diesel':
        return this.valorFinal = (this.KmRodados / 15) * this.precoLitro;
        break;
    };
    return this.valorFinal;

}
}

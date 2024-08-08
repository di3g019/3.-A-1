import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero: number | null = null;
  mensaje: string = '';

  mostrarVocal() {
    const vocales = ['A', 'E', 'I', 'O', 'U'];
    if (this.numero !== null && this.numero > 0 && this.numero <= vocales.length) {
      this.mensaje = `La vocal correspondiente al número ${this.numero} es: ${vocales[this.numero - 1]}`;
    } else {
      this.mensaje = 'Número fuera de rango. Ingrese un número entre 1 y 5.';
    }
  }
}

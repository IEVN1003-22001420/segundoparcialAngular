import { Component } from '@angular/core';
import {FormsModule, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  formulario!: FormGroup;
  mensaje: string = '';
  nombre: string = '';
  total: number = 0;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      boletos: new FormControl(''),
      tarjeta: new FormControl('')
    });
  }

  Procesar(): void {

    const nombre = this.formulario.value.nombre;
    const compradores = Number(this.formulario.value.compradores);
    const boletos = Number(this.formulario.value.boletos);
    const tarjeta = this.formulario.value.tarjeta;

    const precio = 12;

    
    if (nombre == '' || compradores < 1 || boletos < 1 || tarjeta == '') {
      this.mensaje = 'Completa todos los campos';
      return;
    }

    if (boletos > compradores * 7) {
      this.mensaje = 'Maximo 7 boletos por persona';
      return;
    }

    
    let subtotal = boletos * precio;

   
    if (boletos >= 3 && boletos <= 5) {
      subtotal = subtotal * 0.90;
    } else if (boletos > 5) {
      subtotal = subtotal * 0.85;
    }

  
    if (tarjeta == 'si') {
      subtotal = subtotal * 0.90;
    }

    this.nombre = nombre;
    this.total = subtotal;
    this.mensaje = 'Compra realizada correctamente';

  }

  Salir(): void {
    this.formulario.reset();
    this.nombre = '';
    this.total = 0;
    this.mensaje = '';
  }

}
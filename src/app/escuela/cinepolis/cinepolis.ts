import { Component } from '@angular/core';
import {FormsModule, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import { Clientes } from '../clientes'

@Component({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
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
      tarjeta: new FormControl(''),
    });
  }
  
  clientes: Clientes[] = [];
  nuevoCliente:Clientes = {
    compradores: '',
    nombre: '',
    boletos: '',
    total: '',
    tarjeta: ''
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

    // Guardar todos los datos de la venta, incluido el total.
    this.nuevoCliente = {
      nombre: nombre,
      compradores: String(compradores),
      boletos: String(boletos),
      tarjeta: tarjeta,
      total: String(subtotal)
    };

    // Agregar la venta al arreglo.
    this.clientes.push({ ...this.nuevoCliente });

    // Guardar las ventas en localStorage.
    localStorage.setItem(
      'clientes',
      JSON.stringify(this.clientes)
    );

  }


  muestraClientes():void{
    this.nuevoCliente.nombre = this.formulario.value.nombre;
    this.nuevoCliente.compradores = String(
      this.formulario.get('compradores')?.value ?? ''
    );
    this.nuevoCliente.boletos = String(
      this.formulario.get('boletos')?.value ?? ''
    );
    this.nuevoCliente.tarjeta = this.formulario.value.tarjeta;
      
    this.Procesar();
  }

  Salir(): void {
    this.formulario.reset();
    this.nombre = '';
    this.total = 0;
    this.mensaje = '';
  }
}
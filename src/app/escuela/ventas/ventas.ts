
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Clientes } from '../clientes';

@Component({
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  selector: 'app-ventas',
  styleUrl: './ventas.css',
  templateUrl: './ventas.html',
})
export class Ventas implements OnInit {

  indiceEdicion: number = -1;
  mostrar:boolean = false
  formulario!: FormGroup;

  clientes: Clientes[] = [];

  nuevoCliente: Clientes = {
    compradores: '',
    nombre: '',
    boletos: '',
    total: '',
    tarjeta: ''
  };

  ngOnInit(): void {

    const datos = localStorage.getItem('clientes');

    if (datos) {
      this.clientes = JSON.parse(datos);
    }

    this.formulario = new FormGroup({
      compradores: new FormControl(''),
      nombre: new FormControl(''),
      boletos: new FormControl(''),
      total: new FormControl(''),
      tarjeta: new FormControl('')
    });

  }


  editarVenta(index: number): void {

    const clienteSeleccionado = this.clientes[index];

    if (!clienteSeleccionado) {
      return;
    }

    this.formulario.patchValue({
      nombre: clienteSeleccionado.nombre,
      compradores: clienteSeleccionado.compradores,
      boletos: clienteSeleccionado.boletos,
      tarjeta: clienteSeleccionado.tarjeta,
      total: clienteSeleccionado.total
    });

    this.indiceEdicion = index;
    this.mostrar = true
  }

  guardarCambios(): void {

    if (this.indiceEdicion === -1) {
      return;
    }

    const clienteActualizado: Clientes = {
      ...this.clientes[this.indiceEdicion],
      ...this.formulario.value
    };

    this.clientes[this.indiceEdicion] = clienteActualizado;


    localStorage.setItem(
      'clientes',
      JSON.stringify(this.clientes)
    );


    this.indiceEdicion = -1;
    this.formulario.reset();

  }

  eliminarVenta(index: number): void {

    this.clientes.splice(index, 1);

    localStorage.setItem(
      'clientes',
      JSON.stringify(this.clientes)
    );


    if (this.indiceEdicion === index) {

      this.indiceEdicion = -1;
      this.formulario.reset();

    } else if (this.indiceEdicion > index) {

      this.indiceEdicion--;

    }

  }

}


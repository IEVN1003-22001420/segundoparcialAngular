import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import { initFlowbite } from 'flowbite';

import { Navbar } from './navbar/navbar/navbar'
import { Distancia } from './formulario/distancia/distancia'
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import { ListaEscuela } from './escuela/lista-escuela/lista-escuela'



@Component({
  imports:[
    Zodiaco,
    Navbar,
    Distancia,
    ListaEscuela,
    FormsModule,
    RouterOutlet,
    RouterLink
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}

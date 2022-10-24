import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

 ordenarSeleccion: string ='sin valor';
 heroes : Heroe[]= [
  {
    nombre:'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre:'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre:'DereDevil',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre:'Linterna Verde',
    vuela: true,
    color: Color.verde
  }
 ]

 ordenarPorNombre(){
  this.ordenarSeleccion='nombre'
 }

 ordenarPorVuela(){
  this.ordenarSeleccion='vuela'
 }
 
}

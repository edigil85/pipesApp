import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

nombre: string ='Edison';
nombreUpper: string = 'EDISON';
nombreCompleto: string = 'ediSon GiraldO';

fecha: Date = new Date(); //el dia de hoy

}

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {



 //i18nSelect
  nombre: string ='Edison';
  genero: string ='masculino';
 
  invitacionMap ={
    'masculino':'invitarlo',
    'femenino':'invitarla',
  }

  //i18nSelect
  clientes: string [] = ['Maria', 'pedro', 'juan'];
  clientesMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  //keyValue Pipe, Json Pipe
  persona={
    nombre: 'Edison',
    edad: 32,
    direccion: 'Calle falsa 123456789'
  }

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise ((resove, reject)=>{
    setTimeout(()=> {
      resove('Hay data en la promesa')
    },3500);
  });

  //Metodos usados de botones
  cambiarPersona(){
    if(this.nombre=='Edison'){
      this.nombre = 'Laura';
      this.genero = 'femenino';
    }
    else{
      this.nombre = 'Edison';
      this.genero = 'masculino';
    }
  }

  adicionarPersona(){
    this.clientes.push("Otro");
  }

  borrarPersona(){
    this.clientes.pop();
  }


}

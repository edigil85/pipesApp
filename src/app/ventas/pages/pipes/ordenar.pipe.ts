import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string ='sin valor'): Heroe[] {
    if (ordenarPor==='sin valor') {
      return heroes;
    }
    if (ordenarPor==='nombre') {
      heroes = heroes.sort( (a,b) => (a.nombre > b.nombre )? 1 : -1 );
    }
    if (ordenarPor==='vuela') {
      heroes = heroes.sort( (a,b) => (a.vuela > b.vuela )? -1 : 1 );
    }
    return heroes;
  }

}

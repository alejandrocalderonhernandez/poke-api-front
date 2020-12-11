import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKilos'
})
export class ToKilosPipe implements PipeTransform {

  transform(value: number): number {
    const baseUnit = 0.10
    return Math.round((value*baseUnit) * 100) / 100;
  }

}

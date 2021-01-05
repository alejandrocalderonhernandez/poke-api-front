import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMeters'
})
export class ToMetersPipe implements PipeTransform {

  transform(value: number): number {
    const baseUnit =  0.01;
    return Math.round((value*baseUnit) * 100) / 100;
  }

}

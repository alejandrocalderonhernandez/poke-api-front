import { ToKilosPipe } from './to-kilos.pipe';
import { ToMetersPipe } from './to-meters.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ToMetersPipe,
    ToKilosPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ToMetersPipe,
    ToKilosPipe
  ]
})
export class UtilModule { }

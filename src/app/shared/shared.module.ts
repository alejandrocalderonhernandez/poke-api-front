import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading/loading.component';
import { PokeFootComponent } from './poke-foot/poke-foot.component';
import { PokeNavComponent } from './poke-nav/poke-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LoadingComponent,
    PokeFootComponent,
    PokeNavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ], 
  exports: [
    LoadingComponent,
    PokeFootComponent,
    PokeNavComponent
  ]
})
export class SharedModule { }

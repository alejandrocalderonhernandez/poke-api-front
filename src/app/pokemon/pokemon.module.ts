import { UtilModule } from './../util/util.module';
import { ToMetersPipe } from './../util/to-meters.pipe';
import { ToKilosPipe } from './../util/to-kilos.pipe';
import { pokeroutes } from './pokemon.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { CardTemplateComponent } from './card-template/card-template.component';
import { DetailsTemplateComponent } from './details-template/details-template.component';
import { HttpClientModule } from '@angular/common/http';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokeSearchComponent } from './poke-search/poke-search.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PokeAppComponent } from './poke-app/poke-app.component';
import { CardsFilterComponent } from './cards-filter/cards-filter.component';

@NgModule({
  declarations: [
    MainSectionComponent, 
    CardTemplateComponent, 
    DetailsTemplateComponent, 
    PokeSearchComponent, 
    PokeAppComponent, CardsFilterComponent
  ],
  imports: [
    RouterModule.forChild(pokeroutes),
    CommonModule,
    HttpClientModule,
    MatPaginatorModule,
    FontAwesomeModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSelectModule,
    UtilModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
   ToKilosPipe,
   ToMetersPipe
  ]
})
export class PokemonModule { }

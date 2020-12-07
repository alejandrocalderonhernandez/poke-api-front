import { pokeroutes } from './pokemon.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTemplateComponent } from './main-template/main-template.component';
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

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokeSearchComponent } from './poke-search/poke-search.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PokeAppComponent } from './poke-app/poke-app.component';

@NgModule({
  declarations: [
    MainTemplateComponent, 
    CardTemplateComponent, 
    DetailsTemplateComponent, 
    PokeSearchComponent, 
    PokeAppComponent
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
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonModule { }

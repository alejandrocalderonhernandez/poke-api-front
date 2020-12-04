import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTemplateComponent } from './main-template/main-template.component';
import { CardTemplateComponent } from './card-template/card-template.component';
import { DetailsTemplateComponent } from './details-template/details-template.component';
import { HttpClientModule } from '@angular/common/http';

import {MatPaginatorModule} from '@angular/material/paginator';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    MainTemplateComponent, 
    CardTemplateComponent, 
    DetailsTemplateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatPaginatorModule,
    FontAwesomeModule
  ]
})
export class PokemonModule { }

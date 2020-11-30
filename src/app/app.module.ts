import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainFormComponent } from './components/main-form/main-form.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeNavComponent } from './shared/poke-nav/poke-nav.component';
import { PokeFootComponent } from './shared/poke-foot/poke-foot.component'

import {MatButtonModule} from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    PokeNavComponent,
    PokeFootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PokemonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  providers: [],
  exports: [
    FontAwesomeModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

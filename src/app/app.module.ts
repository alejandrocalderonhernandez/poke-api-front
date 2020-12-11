import { UtilModule } from './util/util.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PokemonModule } from './pokemon/pokemon.module';
import { LoginModule } from './login/login.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PokemonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    LoginModule
  ],
  providers: [],
  exports: [
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

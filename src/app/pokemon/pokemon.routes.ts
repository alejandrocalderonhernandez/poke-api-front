import { MainSectionComponent } from './main-section/main-section.component';
import { CardsFilterComponent } from './cards-filter/cards-filter.component';
import { PokeAppComponent } from './poke-app/poke-app.component';
import { DetailsTemplateComponent } from './details-template/details-template.component';
import { Routes } from '@angular/router';

export const pokeroutes: Routes = [
    {path: 'pokemon/:name', component: DetailsTemplateComponent},
    {path: 'pokemons/:type', component: CardsFilterComponent},
    {path: '', component: MainSectionComponent},
    {path: '**', redirectTo: ''}
];


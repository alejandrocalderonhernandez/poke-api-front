import { PokeAppComponent } from './poke-app/poke-app.component';
import { DetailsTemplateComponent } from './details-template/details-template.component';
import { Routes } from '@angular/router';
import { MainTemplateComponent } from './main-template/main-template.component'

export const pokeroutes: Routes = [
    {path: 'pokemon/:name', component: DetailsTemplateComponent},
    {path: '', component: MainTemplateComponent},
    {path: '**', redirectTo: ''}
];


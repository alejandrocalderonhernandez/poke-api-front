import { Routes } from '@angular/router';
import { MainTemplateComponent } from './main-template/main-template.component'

export const pokeroutes: Routes = [
    {path: '', component: MainTemplateComponent},
    {path: '**', redirectTo: ''}
];
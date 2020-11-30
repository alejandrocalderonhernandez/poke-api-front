import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFormComponent } from './components/main-form/main-form.component';
import { pokeroutes } from './pokemon/pokemon.routes'
import { MainTemplateComponent } from './pokemon/main-template/main-template.component'


const routes: Routes = [
  {path: 'poke-cards', component: MainTemplateComponent, children: pokeroutes},
  {path: '', component: MainFormComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AuthGuard } from './login/services/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'poke-cards',
  canLoad: [AuthGuard],
    loadChildren: () => import('./pokemon/pokemon.module')
       .then(m => m.PokemonModule)  
  },
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


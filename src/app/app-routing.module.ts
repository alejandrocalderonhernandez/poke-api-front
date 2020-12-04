import { AuthGuard } from './login/services/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pokeroutes } from './pokemon/pokemon.routes'
import { MainTemplateComponent } from './pokemon/main-template/main-template.component'


const routes: Routes = [
  { path: 'poke-cards', 
    component: MainTemplateComponent, 
    children: pokeroutes,
    canActivate: [AuthGuard]
  },
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

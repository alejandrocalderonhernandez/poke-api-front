import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: LoginService) {

  }

  canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return this.service.isAutenticated();
  }
  
}

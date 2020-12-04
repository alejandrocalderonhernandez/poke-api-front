import { User } from './../login/model/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authenticated: boolean;

  constructor() { 
    this.authenticated = false;
  }

  public isAutenticated(): boolean {
    return this.authenticated;
  }

  public login(user: User): void {
    console.log(user);
    if(user.password !== null) {
      this.authenticated = true;
    } else {
      this.authenticated = true;
    }
  }
}

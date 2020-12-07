import { User } from './../login/model/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authenticated: boolean;
  private username: string;

  constructor() { 
    this.authenticated = false;
  }

  //put your auth service here
  public isAutenticated(): boolean {
    return true;
  }

  public login(user: User): void {
    this.username = user.username;
    this.authenticated = true;
  }

  public logout(){
    this.authenticated = false;
  }

  public getUsername(): string {
    return this.username;
  }
}

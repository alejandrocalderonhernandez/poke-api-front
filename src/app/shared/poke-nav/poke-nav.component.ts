import { Router } from '@angular/router';
import { LoginService } from './../../login/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-nav',
  templateUrl: './poke-nav.component.html',
  styleUrls: ['./poke-nav.component.scss']
})
export class PokeNavComponent implements OnInit {

  public iconUrl: string;
  public aplicationName: string;
  public username: string;

  constructor(private loginService: LoginService, private router: Router) { 
    this.iconUrl = '/assets/pokeball.png';
    this.aplicationName = 'pokeapi';
  }

  ngOnInit(): void {
    this.username = this.loginService.getUsername();
  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['']);
  }

}

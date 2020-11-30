import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-nav',
  templateUrl: './poke-nav.component.html',
  styleUrls: ['./poke-nav.component.scss']
})
export class PokeNavComponent implements OnInit {

  iconUrl: string;
  aplicationName: string;

  constructor() { 
    this.iconUrl = '/assets/pokeball.png';
    this.aplicationName = 'pokeapi';
  }

  ngOnInit(): void {
  }

}

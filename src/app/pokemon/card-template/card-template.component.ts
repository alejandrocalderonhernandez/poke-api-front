import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Router } from '@angular/router';
import { faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss']
})
export class CardTemplateComponent implements OnInit {

  @Input()
  public pokemon: Pokemon;

  public faInfoCircle: IconDefinition;
  public showType: boolean;

  constructor(private router: Router) { 
    this.faInfoCircle = faInfoCircle;
    this.showType = false;
  }

  ngOnInit(): void {
  }

  public onLoad(): void {
    this.router.navigate(['poke-cards/pokemon', this.pokemon.name]);
  }

  typeDetails(): void {
    this.showType = true;
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.showType = false;
 }, 1500);
  }
}
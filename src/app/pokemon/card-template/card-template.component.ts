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

  constructor(private router: Router) { 
    this.faInfoCircle = faInfoCircle;
  }

  ngOnInit(): void {
  }

  public onLoad(): void {
    this.router.navigate(['poke-cards/pokemon', this.pokemon.name]);
  }
}
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss']
})
export class CardTemplateComponent implements OnInit {

  @Input()
  public pokemon: Pokemon;

  typeClass: string;
  faInfoCircle: IconDefinition;

  constructor() { 
    this.faInfoCircle = faInfoCircle;
  }

  ngOnInit(): void {
    switch(this.pokemon.type) {
      case 'fire' : { this.typeClass = 'fire'; break;} 
      case 'poison' : { this.typeClass = 'poison'; break;} 
      case 'electric' : { this.typeClass = 'electric'; break;} 
      case 'water' : { this.typeClass = 'water'; break;} 
      case 'grass' : { this.typeClass = 'grass'; break;} 
      case 'bug' : { this.typeClass = 'bug'; break;} 
      case 'steel' : { this.typeClass = 'steel'; break;} 
      case 'flying' : { this.typeClass = 'flying'; break;} 
      case 'ghost' : { this.typeClass = 'ghost'; break;} 
      case 'psychic' : { this.typeClass = 'psychic'; break;} 
      default : { this.typeClass = 'default'; break;} 

    }
  }
}
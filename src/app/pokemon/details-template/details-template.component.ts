import { Pokemon } from './../models/pokemon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-template',
  templateUrl: './details-template.component.html',
  styleUrls: ['./details-template.component.scss']
})
export class DetailsTemplateComponent implements OnInit {

  public pokemon: Pokemon;

  typeClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}

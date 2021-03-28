import { Pokemon } from './../models/pokemon.model';
import { PokeService } from './../services/poke-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-filter',
  templateUrl: './cards-filter.component.html',
  styleUrls: ['./cards-filter.component.scss']
})
export class CardsFilterComponent implements OnInit {

  public pokeRecords: Array<Pokemon>;

  constructor(private activatedRoute: ActivatedRoute,
    private service: PokeService,
    private router: Router) {
      this.pokeRecords = new Array<Pokemon>();
    }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.type;
    this.pokeRecords = this.service.getByType(id);
  }

}

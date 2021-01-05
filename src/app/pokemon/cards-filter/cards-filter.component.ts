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
  public type: string;

  constructor(private activatedRoute: ActivatedRoute,
    private service: PokeService,
    private router: Router) {
      this.pokeRecords = new Array<Pokemon>();
    }

  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.params.type;
    this.service.findAll().subscribe(
      response => this.setPokemons(response.results)
    )
  }

  private setPokemons(urls: Array<string>): void {
    urls.forEach(url => this.service.findByUrl(url).subscribe(
      pokemon => {
        if (pokemon.type === this.type) {
          this.pokeRecords.push(pokemon);
        }
      }
    ));
  }

}

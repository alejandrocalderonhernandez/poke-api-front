import { User } from './../../login/login/model/user.model';
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

  public urls: Array<string>;
  public pokeRecords: Array<Pokemon>;

  constructor(private activatedRoute: ActivatedRoute,
    private service: PokeService,
    private router: Router) {
      this.pokeRecords = new Array<Pokemon>();
      this.urls = new Array<string>();
    }

  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.params.type;
     this.service.getByType(type).subscribe( r => {
      for (let i = 0; i < 21; i++) {
        this.urls.push(r[i].pokemon.url);
      }
      this.urls.forEach(url => {
        this.service.findByUrl(url).subscribe(p => this.pokeRecords.push(p));
      })

    })
  }

}

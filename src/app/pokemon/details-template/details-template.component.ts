import { PokeService } from './../services/poke-service.service';
import { Pokemon } from './../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-details-template',
  templateUrl: './details-template.component.html',
  styleUrls: ['./details-template.component.scss']
})
export class DetailsTemplateComponent implements OnInit {

  public pokemon: Pokemon;
  public dummy: string;
  public isLoading: boolean;

  constructor(private activatedRoute: ActivatedRoute, 
              private service: PokeService,
              private router: Router) { 
    this.setDummyText();
    this.isLoading = true;
  }

  ngOnInit(): void {
    const pokemonName = this.activatedRoute.snapshot.params.name;
    this.service.findByPokeName(pokemonName).subscribe(p => {
      this.pokemon = p;
      this.isLoading = false;
    }, 
    err => {
      console.log(err)
      if(err.status == 404) {
        Swal.fire({
          title: 'Oops',
          text:   err.error,
          icon:   'error',
          confirmButtonText: 'Regresar',
        }).then((result) => {
          if (result.value) {
            this.isLoading = false;
            this.router.navigate(['poke-cards']);
          }
        })
      }
    });
  
  }

  private setDummyText(): void {
    this.dummy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  }

}

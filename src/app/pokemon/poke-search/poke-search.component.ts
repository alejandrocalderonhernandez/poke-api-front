import { PokeService } from './../services/poke-service.service';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  public searchForm: FormGroup;
  public faSearch: IconDefinition;
  public types: Array<string>;
  public validForm;

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private service: PokeService) { 
                this.faSearch = faSearch;
                this.validForm = true;
   }

  ngOnInit(): void {
    this.service.getPokeTypes().subscribe(
      data => this.types = data 
    )
    this.searchForm = this.formBuilder.group({
      name: [],
      type: []
    });
  }

  public search(): void {
    const pokename = this.searchForm.get('name').value;
    const type = this.searchForm.get('type').value;
    if(pokename !== undefined && type === null) {
      this.validForm = true;
      this.router.navigate(['poke-cards/pokemon', pokename]);
    } else if (type !== undefined && pokename === null) {
      this.validForm = true;
      this.router.navigate(['poke-cards/pokemons', type]);
    } else {
      this.validForm = false;
    }

  }

}

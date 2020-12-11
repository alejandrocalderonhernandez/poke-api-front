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
  public faSearch: IconDefinition

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private service: PokeService) { 
                this.faSearch = faSearch;
   }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

  public search(): void {
    const pokename = this.searchForm.get('name').value;
    this.router.navigate(['poke-cards/pokemon', pokename]);
  }

}

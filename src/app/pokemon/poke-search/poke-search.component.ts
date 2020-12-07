import { PokeServiceService } from './../services/poke-service.service';
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

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private service: PokeServiceService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

  public search(): void {
    const pokename = this.searchForm.get('name').value;
    this.router.navigate(['poke-cards/pokemon', pokename]);
    this.service.findByPokeName(this.searchForm.get('name').value).subscribe(
      r => console.log(r)
    )
  }

}

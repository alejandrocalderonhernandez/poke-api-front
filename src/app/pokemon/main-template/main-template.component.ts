import { ResponseInfo } from './../models/response.model';
import { PokeServiceService } from './../services/poke-service.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainTemplateComponent implements OnInit {

  urls: Array<string> = new Array<string>();
  pokeRecords: Array<Pokemon> = new Array<Pokemon>();

  constructor(private service: PokeServiceService) { }

  ngOnInit(): void {
    console.log('init2')
    this.service.findByPage(2)
      .subscribe(r => {
        this.urls = r.results
        this.urls.forEach(url => {
          this.service.findByUrl(url).subscribe( pokemon => {
            this.pokeRecords.push(pokemon);
            console.log(pokemon);
          });
        })
      });

    

     
  }

}

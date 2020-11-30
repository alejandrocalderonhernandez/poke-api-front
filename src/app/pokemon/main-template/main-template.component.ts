import { environment } from './../../../environments/environment';
import { PokeServiceService } from './../services/poke-service.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainTemplateComponent implements OnInit {

  public urls: Array<string> = new Array<string>();
  public pokeRecords: Array<Pokemon> = new Array<Pokemon>();
  public totalRecords: number;
  public pageSize: number;
  public offset: number;

  constructor(private service: PokeServiceService) {
    this.totalRecords = 0;
    this.pageSize = environment.limitRecords;
   }

  ngOnInit(): void {
    this.offset = 0;
    this.getPage(this.offset);
  }

  public onPageChange($event): void {
    this.pokeRecords = [];
    console.log($event.pageIndex)
    this.getPage(this.offset += this.pageSize);
  }

  private getPage(index: number): void {
    this.service.findByPage(index)
      .subscribe(r => {
        if(this.totalRecords === 0) {
          this.totalRecords = r.totalRecords;
        }
        this.urls = r.results
        this.setPokeRecords();
        this.urls = [];
      });
  }

  private setPokeRecords(): void {
      this.urls.forEach(url => {
        this.service.findByUrl(url).subscribe( pokemon => {
          this.pokeRecords.push(pokemon);
        });
      })
  }
}

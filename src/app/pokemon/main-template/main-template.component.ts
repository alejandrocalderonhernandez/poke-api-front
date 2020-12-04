import { environment } from './../../../environments/environment';
import { PokeServiceService } from './../services/poke-service.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PageEvent } from '@angular/material/paginator';


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
  public pageIndex: number;
  public isLoading: boolean;

  constructor(private service: PokeServiceService) {
    this.totalRecords = 0;
    this.pageIndex = 0;
    this.isLoading = true;
    this.pageSize = environment.limitRecords;
   }

  ngOnInit(): void {
    this.getPages(this.pageIndex);
  }

  public onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.isLoading = true;
    this.pokeRecords = [];
    this.getPages(this.pageIndex * this.pageSize);
  }

  private getPages(page: number): void {
    this.service.findByPage(page)
      .subscribe(r => {
        if(this.totalRecords === 0) {
          this.totalRecords = r.totalRecords;
        }
        this.urls = r.results
        this.setPokeRecords();
        this.urls = [];
        this.isLoading = false;
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

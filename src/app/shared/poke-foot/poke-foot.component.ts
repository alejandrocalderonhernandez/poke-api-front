import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-foot',
  templateUrl: './poke-foot.component.html',
  styleUrls: ['./poke-foot.component.scss']
})
export class PokeFootComponent implements OnInit {

  public profile: string;

  constructor() {
    this.profile = 'https://github.com/alejandrocalderonhernandez';
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faCircleNotch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  faCircleNotch: IconDefinition;

  constructor() { 
    this.faCircleNotch=faCircleNotch;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-response',
  templateUrl: './search-response.component.html',
  styleUrls: ['./search-response.component.css']
})
export class SearchResponseComponent implements OnInit ,OnChanges{

  @Input() response;

  constructor() { }

  ngOnInit() {
    console.log(this.response)
  }


  ngOnChanges(changes:SimpleChanges){
    console.log(`ngOnChanges - data is ${this.response}`);
    for (let key in changes) {
      console.log(`${key} changed.
  Current: ${changes[key].currentValue}.
  Previous: ${changes[key].previousValue}`);
    }
  }


}

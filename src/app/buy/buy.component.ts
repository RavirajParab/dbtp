import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {


  model: any = {};

  buy() {
    console.log(this.model);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

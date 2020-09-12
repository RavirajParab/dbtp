import { Component, OnInit } from '@angular/core';
import { DptpUtilityService } from '../dptp-utility.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {


  model: any = {};
  AlertMessage : string;
  Securities : Array<string>=[];

  buy() {
    const formData=this.model;
    // create a the position using the form data
    const position: Position ={
      //@ts-ignore
      Symbol: formData.Symbol.split(',')[0],
      BP: Number(formData.Symbol.split(',')[1]),
      Quantity : formData.Quantity,
      Open: true,
      PL : 0,
    }

    //post the position
    
    
  }
  constructor(private utility:DptpUtilityService) { }
  ngOnInit(): void {
    this.utility.getSecurities()
                .subscribe((securities)=>{
                  this.Securities = securities;
                },err=>{
                   this.AlertMessage=err.message;
                });
  }

}

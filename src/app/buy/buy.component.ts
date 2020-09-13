import { Component, OnInit } from '@angular/core';
import { DptpUtilityService } from '../dptp-utility.service';
import {Position} from '../../IDBTP';

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
      Symbol: formData.Symbol.split(',')[0],
      BP: Number(formData.Symbol.split(',')[1]),
      Quantity : formData.Quantity,
      Open: true,
      Username: this.utility.currentLoggedInUser,
      PL : 0,
    }

    // add the position
    this.utility.addPosition(position)
                .subscribe(()=>{
                  this.AlertMessage=`Order ${position.Symbol} qty:${position.Quantity} executed!`;
                },err=>{
                  this.AlertMessage=err.message;
                });       
    
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

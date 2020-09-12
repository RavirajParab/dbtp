import { Position } from '../../IDBTP';
import { Component, OnInit } from '@angular/core';
import { DptpUtilityService } from '../dptp-utility.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor(private utility:DptpUtilityService) { }
  Positions: Array<Position>=[];
  AlertMessage : string;

  // on position close click
  closePosition(position:Position){
    let positionToBeClosed = position;
    positionToBeClosed.Open=false;
    // evaluate NPL
    if(position.PL>0){
      // put 10.005% tax on Profit
      positionToBeClosed.PL = 0.89995*positionToBeClosed.PL;
    }
   
    
    // update the position in the table
    this.utility.updatePosition(positionToBeClosed)
                .subscribe(()=>{
                    this.AlertMessage=`${positionToBeClosed.Symbol} is squarred off!`;
                    // then remove the item from the positions array
                    this.Positions=this.Positions.filter(i=>i.id!==positionToBeClosed.id);
                },err=>{
                    this.AlertMessage= err.message;
                });
                
  }


  ngOnInit(): void {
    //make a call for the positions
    const getSecurities = this.utility.getSecurities();
    const getPositions = this.utility.getPositions();
    //forkJoin both
    forkJoin([getSecurities,getPositions])
    .subscribe(result=>{
      //@ts-ignore
      const positionsWithPL = result[1].map(i=>{
        return {
          Symbol : i.Symbol,
          Quantity: i.Quantity,
          id : i.id,
          Open: true,
          PL : (i.BP - result[0].find(x=>x.Symbol==i.Symbol).Price)*i.Quantity
        }
      });
     // set the positions
     this.Positions=positionsWithPL;
   
    },err=>{
      console.log(err);
    })
  }
}

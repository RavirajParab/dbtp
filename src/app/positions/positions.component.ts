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

  // on position close click
  

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
          ID : i.id,
          PL : (i.BP - result[0].find(x=>x.Symbol==i.Symbol).Price)*i.Quantity
        }
      });
     // set the positions
     this.Positions=positionsWithPL;
     console.log(this.Positions);
    },err=>{
      console.log(err);
    })
  }
}

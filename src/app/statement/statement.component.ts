import { Component, OnInit } from '@angular/core';
import { DptpUtilityService } from '../dptp-utility.service';
import {Position} from "../../IDBTP";

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  Positions: Array<Position>=[];
  TotalPL : number;
  constructor(private utility:DptpUtilityService) { }

  ngOnInit(): void {
    this.utility.getPositions(false)
                .subscribe((positions:Array<Position>)=>{
                  this.Positions = positions;
                 
                  this.TotalPL= Number(positions
                                     .reduce((prev,curr):any=>{
                                       return prev.PL + curr.PL;
                                     }));
                                     this.utility
                                      
                });
  }

  //export
  export(){
    this.utility.downloadFile(this.Positions,
      Object.keys(this.Positions[0]),
      "PLStatement");
  }

}

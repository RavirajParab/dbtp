import { Component, OnInit } from '@angular/core';
import { DptpUtilityService } from '../dptp-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  AttemptCounter : number =0;
  AlertMessage : string;

  login(){
    this.utility.authenticateUser(this.model)
                .subscribe((IsUserAuthenticated)=>{
                  //take user to the buy screen
                  if(IsUserAuthenticated)
                  this.router.navigate(["/buy"]);
                  else {
                    this.AttemptCounter++;
                    this.AlertMessage=`Your credentials don't match, Attempts :${this.AttemptCounter} !!`;
                  }
                },err=>{
                   this.AlertMessage = err.message;
                });

  }

  
  constructor(private utility:DptpUtilityService, private router:Router) { }

  ngOnInit(): void {
  }

}

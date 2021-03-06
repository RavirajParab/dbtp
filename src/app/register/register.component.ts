import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DptpUtilityService} from '../dptp-utility.service';
import { User } from 'src/IDBTP';
import {flatMap, delay} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //define the variables 
  registrationForm: FormGroup;
  AlertMessage : string;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utility : DptpUtilityService
  ) { }

  
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
  });

       
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  // on submit
  register(){
      
      const userDetails: User=this.registrationForm.value;
      this.utility.userExists(userDetails)
                  .pipe(
                    flatMap((userExists)=>{
                      if(!userExists){
                        return this.utility.registerUser(userDetails);
                      }else{
                        throw new Error("User already exists! If you have already registered, click login button");
                      }
                    }),
                  ).subscribe(user=>{
                     this.AlertMessage="Fantastic!!! you have been registered. Taking you to the login";
                     //navigate the user after 2100ms
                     setTimeout(()=>{
                      this.router.navigate(['/login']);
                     },4000)
                  },err=>{
                     this.AlertMessage=err.message;
                  });
      
      //submit the values to the server
      /*
      this.utility.registerUser(this.registrationForm.value)
                  .subscribe(res=>{
                    console.log(res)
                  },(err)=>{
                    console.log(`Error occured in register ${err.message}`)
                  });
      */
                                       
  }

  
}

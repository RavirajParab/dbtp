import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DptpUtilityService} from '../dptp-utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //define the variables 
  registrationForm: FormGroup;
  
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
      /*
      console.log(this.registrationForm.value);
      //submit the values to the server
      this.utility.RegisterUser(this.registrationForm.value)
                  .subscribe(res=>{
                    console.log(res)
                  },(err)=>{
                    console.log(`Error occured in register ${err.message}`)
                  });
                  */

                  this.utility.getSecurities()
                  .subscribe(res=>{
                    console.log(res)
                  },(err)=>{
                    console.log(`Error occured in register ${err.message}`)
                  });
                   
                            
  }

  
}

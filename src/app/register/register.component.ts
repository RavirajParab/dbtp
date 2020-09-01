import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      console.log(this.registrationForm.value);
  }
}

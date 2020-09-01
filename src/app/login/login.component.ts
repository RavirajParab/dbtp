import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  login() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  constructor() { }

  ngOnInit(): void {
  }

}

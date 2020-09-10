import { Component, OnInit, Input } from '@angular/core';
import * as bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  //Mesage for the toast
  @Input('message') Message :string="";
  constructor() { }
  showToast(){
    const MyToastElement = document.getElementById('mytoast');
    const MyToast = new bootstrap.Toast(MyToastElement,{ 'animation': true, 'autohide': true, 'delay': 10000 });
    MyToast.show();
  }
  
  ngOnInit(): void {
   // this.showToast();
  }

  ngOnChanges(){
    if(this.Message){
      this.showToast();
    }
  }
}

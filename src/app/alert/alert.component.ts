import { Component, OnInit, Input } from '@angular/core';

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
    //@ts-ignore
    const MyToast = new bootstrap.Toast(MyToastElement,{ 'animation': true, 'autohide': true, 'delay': 4000 });
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

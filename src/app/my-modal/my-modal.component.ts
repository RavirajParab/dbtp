import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {
  // specify the input parameters
  @Input('m-title') ModalTitle: string="Default title";
  @Input('m-id') ModalID : string="mymodal";
  constructor() { }
  ngOnInit(): void {
  }

}

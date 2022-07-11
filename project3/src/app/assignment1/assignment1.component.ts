import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  // Explicit type
  ContactId:number=123;
  ContactName:string="Rajat Sharma";
  Company:string="Abc 123 Pvt Ltd";
  DueAmount:number=4555;
  Phone:any=91-8208388947;
  Area="South Zone";


  constructor() { }

  ngOnInit(): void {
  }

}

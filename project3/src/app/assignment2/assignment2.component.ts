import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  ShowBox:boolean=true;
  

  constructor() { }

  ngOnInit(): void {
  }
  onToggle()
  {
    this.ShowBox=!this.ShowBox;
  }

}

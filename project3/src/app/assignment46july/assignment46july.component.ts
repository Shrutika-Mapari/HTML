import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment46july',
  templateUrl: './assignment46july.component.html',
  styleUrls: ['./assignment46july.component.css']
})
export class Assignment46julyComponent implements OnInit {
  arrData:any = [];
  constructor() { }

  ngOnInit(): void {
    this.arrData = [
      {id1:10},
      {id2:20},
      {id3:30},
      {id4:40}
    ]
  }

}

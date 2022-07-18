import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
arrUser:any=[
  {userid:1,username:'Admin1',status:'A'},
  {userid:2,username:'Admin2',status:'D'},
  {userid:3,username:'Admin3',status:'A'},
  {userid:4,username:'Admin4',status:'D'},
  {userid:5,username:'Admin5',status:'A'},
  {userid:6,username:'Admin6',status:'o'},
{userid:6,username:'Admin6',status:'D'}
]

  constructor() { }

  ngOnInit(): void {
  }

}

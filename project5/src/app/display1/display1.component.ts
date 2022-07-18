import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';


@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  constructor(private data2:Data1Service) { }

  ngOnInit(): void {
    this.data2.DisplayData1();
  }

}

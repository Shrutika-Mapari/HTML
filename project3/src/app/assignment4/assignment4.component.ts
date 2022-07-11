import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  ColorType:Color=Color.None;

  constructor() { }

  ngOnInit(): void {
  }
  onColor(ColorNo:any)
  {
    if(ColorNo===1)
    {
      this.ColorType=Color.Red;
    }
    else if(ColorNo===2)
    {
      this.ColorType=Color.Green;
    }
    else if(ColorNo===3)
    {
      this.ColorType=Color.Blue;
    }
    else if(ColorNo===4)
    {
      this.ColorType=Color.Black;
    }
    else{
      this.ColorType=Color.None;
    }
  }
}
  enum Color{
    None="None",
    Red="Red Color",
    Green="Green Color",
    Blue="Blue Color",
    Black="Black Color"}



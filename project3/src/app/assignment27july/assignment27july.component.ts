import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment27july',
  templateUrl: './assignment27july.component.html',
  styleUrls: ['./assignment27july.component.css']
})
export class Assignment27julyComponent implements OnInit {
  nameColor:String="";
  selectedColor:string="";
  constructor() { }

  ngOnInit(): void {
  }
  // 1st Way
  // onBlue()
  // {
  //   this.nameColor="Blue";
  // }
  // onGreen()
  // {
  //   this.nameColor="Green";
  // }
  // onRed()
  // {
  //   this.nameColor="Red";
  // }

  onChangeColor(colorName:string)
  {
    this.selectedColor = colorName;
  }

}

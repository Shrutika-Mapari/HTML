import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment16july',
  templateUrl: './assignment16july.component.html',
  styleUrls: ['./assignment16july.component.css']
})
export class Assignment16julyComponent implements OnInit {
// firstname:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(eleFirstName:any,eleLastName:any)
  {
    console.log(eleFirstName.value);
    console.log(eleLastName.value);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment26july',
  templateUrl: './assignment26july.component.html',
  styleUrls: ['./assignment26july.component.css']
})
export class Assignment26julyComponent implements OnInit {
employeecode:any="";
department:string="";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.employeecode);
    console.log(this.department);

  }

}

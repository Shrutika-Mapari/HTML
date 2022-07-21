import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
  empData: any;
  empData2:any=[];
  selectEmpId:number=0;
  show:boolean=false;
    constructor() { }
  
    ngOnInit(): void {
      this.empData =[
        {eId:1, eName:"Shruti",salary:56000, dept:"Marketing", post:"Manager"},
        {eId:2, eName:"Tushar",salary:50000, dept:"Sale", post:"Manager"},
        {eId:3, eName:"Rutuja",salary:40000, dept:"Devloper", post:"Jr Devloper"},
        {eId:4, eName:"Ved",salary:35000, dept:"HR", post:"Manager"},
        {eId:5, eName:"Adhira",salary:80000, dept:"Devloper", post:" Sr-Devloper"}
      ]
    }
  
    onSelect(empRow:any)
    {
      this.empData2.push(empRow);
    }
  
}

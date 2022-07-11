import { Component, OnInit } from '@angular/core';
interface Details{
  contactname:string;
  contactadd:string;
  contactphone:number;
  areacode:string;
  
}

@Component({
  selector: 'app-assignment25july',
  templateUrl: './assignment25july.component.html',
  styleUrls: ['./assignment25july.component.css']
})
export class Assignment25julyComponent implements OnInit {

  constructor() { }
  arr:any;
  ngOnInit(): void {
   
  }

  
   Display()
   {
    let arrEmp:Details={contactname:"Nidhi Singh",contactadd:"H.No.12345",contactphone:12345667,areacode:"South zone"};
     this.arr=arrEmp; 
       console.log(arrEmp);
   }

}

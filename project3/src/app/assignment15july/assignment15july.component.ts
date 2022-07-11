import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment15july',
  templateUrl: './assignment15july.component.html',
  styleUrls: ['./assignment15july.component.css']
})
export class Assignment15julyComponent implements OnInit {
  Result:string="";

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
     this.Result=this.AddContact();
    // document.getElementById("demo").innerHTML=Result;
  }
  AddContact():string{
    return "Rohit Kumar";    
  }
}

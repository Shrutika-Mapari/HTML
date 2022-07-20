import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frmConact:any)
  {
    if(frmConact.status==='VALID')
    {
      this.msg = "Contact form Submitted";
    
    }
    else
    {
      this.msg = "Contact form is Invalid";
      
    }
  
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  frmClient:any;
  constructor() { }

  ngOnInit(): void {
    this.frmClient =  new FormGroup({
      clientid: new FormControl("",[Validators.required, Validators.minLength(6)]),
      clientname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      address:new FormControl("", Validators.required),
      phoneno: new FormControl("", Validators.pattern('^[0-9]+$'))
    })
  }
  onSubmit() {
    console.log("Submited", this.frmClient.status);
  }
  

}

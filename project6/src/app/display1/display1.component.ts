import { Component, OnInit } from '@angular/core';
import { Contacts } from '../add-new-contact.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  Result1:string="";
  Result2:string="";
  Result3:string="";
  Result4:string="";


  constructor() { }

  ngOnInit(): void {
    const data1=new Contacts.AddNewContactService();
    this.Result1=data1.DisplayAddNewContact();
    const data2=new Contacts.EditContactService();
    this.Result2=data2.DisplayEditContact();
    const data3=new Contacts.DeleteContactService();
    this.Result3=data3.DisplayDeleteContact();
    const data4=new Contacts.ListContactService();
    this.Result4=data4.DisplayListContact();
  }

}

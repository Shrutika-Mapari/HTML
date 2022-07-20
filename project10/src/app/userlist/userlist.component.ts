import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  UserData:any=[];
  selectedUserId:string="";

  constructor() { }

  ngOnInit(): void {
    this.UserData=[
      {userid:"Admin1",displayname:"Shruti",userstatus:"Active",roleassign:"manager" },
      {userid:"Admin2",displayname:"Adhira",userstatus:"Disabled",roleassign:"admin" },
      {userid:"Admin3",displayname:"Vedanti",userstatus:"Active",roleassign:"user" },
    {userid:"Admin4",displayname:"Rutuja",userstatus:"Active",roleassign:"manager" },
  {userid:"Admin5",displayname:"Vibha",userstatus:"Disabled",roleassign:"admin" }
    ]
    
  }
  onDetails(selectedId:string)
  {
    this.selectedUserId=selectedId;
  }

}
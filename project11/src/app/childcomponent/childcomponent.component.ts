import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input('propEmpChild') EmployeeData: any;

  constructor() { }

  ngOnInit(): void {
  }

}

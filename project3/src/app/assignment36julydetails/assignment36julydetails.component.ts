import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-assignment36julydetails',
  templateUrl: './assignment36julydetails.component.html',
  styleUrls: ['./assignment36julydetails.component.css']
})
export class Assignment36julydetailsComponent implements OnInit {
  @Input('propname') Name:any;
  @Input('propdesignation') Designation:any;
  @Input('propleavebal') Leave:any;

  constructor() { }

  ngOnInit(): void {
  }

}

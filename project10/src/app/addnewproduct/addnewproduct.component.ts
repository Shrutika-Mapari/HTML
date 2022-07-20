import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.css']
})
export class AddnewproductComponent implements OnInit {
  @Output() EventProductUpdate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frmProduct : any)
  {
    this.EventProductUpdate.emit(frmProduct.value);
  }
 

}

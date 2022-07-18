import { Injectable } from '@angular/core';
import { Data2Service } from './data2.service';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor(private data1:Data2Service) { }
  DisplayData1()
  {
    // this.data1.DisplayData2();
    this.data1.DisplayData2();
    console.log("This is data1 service");
  }
}

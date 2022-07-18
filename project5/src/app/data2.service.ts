import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }
  DisplayData2()
  {
    console.log("Data2 Service");
    return "test";
  }
}

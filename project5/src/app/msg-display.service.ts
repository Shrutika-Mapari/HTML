import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class MsgDisplayService {
  Result:string="";
  constructor(private logger:LoggerService) { }
  DisplayMessage()
  {
    this.Result=this.logger.LoggerData("Admin logged today at 11am ");
    console.log("MsgDisplayService Test");
  }
}

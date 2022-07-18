 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
 })
export class LoggerService {

  constructor() { }
  LoggerData(MessageText:string) 
 {
    return MessageText;
  }
}

import { Injectable } from '@angular/core';
import { EmployeesModule } from './employees.module';

@Injectable({
  providedIn: EmployeesModule
})
export class Data1Service {

  constructor() { }
 DisplayEmployee():string
 {
  return "Employee service is called";
 }
  
}

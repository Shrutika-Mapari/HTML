import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  frmUser: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frmUser = this.formBuilder.group(
      {
        username: '',
        skills: this.formBuilder.array([])
      }
    )
  }
  get role_assign(): FormArray {
    return this.frmUser.get("role_assign") as FormArray
  }

 new_role_assign(): FormGroup {
    return this.formBuilder.group(
      {
        role_assign: ''
      }
    )
  }
  addRoleAssign()
  {
    this.role_assign.push(this.new_role_assign());
  }
  removeRoleAssign(i:number)
  {
    this.role_assign.removeAt(i);
  }
  onSubmit()
  {
    console.log(this.frmUser.value)
  }
  

}

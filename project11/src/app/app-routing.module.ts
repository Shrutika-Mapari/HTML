import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';


const routes: Routes = [
  {path:'display1', component:Display1Component},
  {path:'parentcomponent',component:ParentcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

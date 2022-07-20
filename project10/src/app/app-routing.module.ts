import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:'userlist',component:UserlistComponent},
  {path:'templatedrivenform',component:TemplateDrivenFormComponent},
  {path:'productlist',component: ProductlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

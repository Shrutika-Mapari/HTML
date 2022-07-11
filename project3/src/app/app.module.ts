import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment15julyComponent } from './assignment15july/assignment15july.component';
import { Assignment25julyComponent } from './assignment25july/assignment25july.component';
import { Assignment16julyComponent } from './assignment16july/assignment16july.component';
import { Assignment26julyComponent } from './assignment26july/assignment26july.component';
import { Assignmnt36julyComponent } from './assignmnt36july/assignmnt36july.component';
import { Assignment46julyComponent } from './assignment46july/assignment46july.component';
import { Assignment36julydetailsComponent } from './assignment36julydetails/assignment36julydetails.component';
import {FormsModule} from '@angular/forms';
import { Assignment17julyComponent } from './assignment17july/assignment17july.component';
import { Assignment27julyComponent } from './assignment27july/assignment27july.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    Assignment15julyComponent,
    Assignment25julyComponent,
    Assignment16julyComponent,
    Assignment26julyComponent,
    Assignmnt36julyComponent,
    Assignment46julyComponent,
    Assignment36julydetailsComponent,
    Assignment17julyComponent,
    Assignment27julyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

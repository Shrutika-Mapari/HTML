import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsgDisplayService } from './msg-display.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { Display2Component } from './display2/display2.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    Display2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MsgDisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

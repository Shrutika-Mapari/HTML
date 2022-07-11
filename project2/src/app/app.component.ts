import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Website';
  fullname="Rahul";
  earning=88888;
  status={'active':'yes'};
}

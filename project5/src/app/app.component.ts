import { Component } from '@angular/core';
import { MsgDisplayService } from './msg-display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MsgDisplayService]
})
export class AppComponent {
  title = 'project5';
}

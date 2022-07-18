import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { MsgDisplayService } from '../msg-display.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor(private logger:LoggerService,private message:MsgDisplayService) { }

  ngOnInit(): void {
    this.logger.LoggerData("Admin logged today at 11 am");
    this.message.DisplayMessage();
  }

}

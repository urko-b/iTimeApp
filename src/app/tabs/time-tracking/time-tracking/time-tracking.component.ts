import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})
export class TimeTrackingComponent implements OnInit {

  @Input() public timeTracking: any;

  constructor() { }

  ngOnInit(): void { }
}

import { Component, OnInit } from '@angular/core';
import { TimeTrackingClokService } from './time-tracking-clock.service';
import { TimeTrackingClock } from './time-trackig-clock.model';

@Component({
  selector: 'app-time-tracking-clock',
  templateUrl: './time-tracking-clock.component.html',
  styleUrls: ['./time-tracking-clock.component.scss']
})
export class TimeTrackingClockComponent implements OnInit {
  public timeTrackingClock: TimeTrackingClock;
  constructor(private timeTrackingClokService: TimeTrackingClokService) { }

  ngOnInit(): void {
    this.timeTrackingClokService.getClock().subscribe((clock: TimeTrackingClock) => {
      this.timeTrackingClock = clock;
    });
  }
}

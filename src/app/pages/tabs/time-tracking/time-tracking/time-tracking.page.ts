import { Component, OnInit } from '@angular/core';
import { TimeTrackingService } from '../time-tracking.service';

@Component({
  selector: 'app-time-tracking',
  templateUrl: 'time-tracking.page.html',
  styleUrls: ['time-tracking.page.scss']
})
export class TimeTrackingPage implements OnInit {
  public isWorking: boolean = false;
  constructor(private timeTrackingService: TimeTrackingService) {
  }

  ngOnInit(): void {
    this.timeTrackingService.isWorking$.subscribe((isWorking) => {
      this.isWorking = isWorking;
    }, (error) => {

    });

    this.timeTrackingService.getIsWorking();
  }

  public pause() {
    this.timeTrackingService.send();
  }

  public work() {
    this.timeTrackingService.send();
  }

  public finish() {

  }
}

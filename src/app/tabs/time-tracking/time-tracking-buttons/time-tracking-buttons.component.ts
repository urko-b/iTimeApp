import { Component, OnInit } from '@angular/core';
import { TimeTrackingService } from '../shared/time-tracking.service';

@Component({
  selector: 'app-time-tracking-buttons',
  templateUrl: 'time-tracking-buttons.component.html',
  styleUrls: ['time-tracking-buttons.component.scss']
})
export class TimeTrackingButtonsComponent implements OnInit {
  public isWorking = false;
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

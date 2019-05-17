import { Component, OnInit } from '@angular/core';
import { TimeTrackingService } from '../shared/time-tracking.service';

@Component({
  selector: 'app-time-tracking-list',
  templateUrl: './time-tracking-list.component.html',
  styleUrls: ['./time-tracking-list.component.scss']
})
export class TimeTrackingListComponent implements OnInit {
  public timeTrackList: any[];
  constructor(private timeTackingService: TimeTrackingService) { }

  ngOnInit(): void {
    this.timeTackingService.getTimeTrackingList()
      .subscribe((list) => this.timeTrackList = list);
  }
}

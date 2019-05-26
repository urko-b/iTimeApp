import { Component, OnInit } from '@angular/core';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-time-tracking-list',
  templateUrl: './time-tracking-list.component.html',
  styleUrls: ['./time-tracking-list.component.scss']
})
export class TimeTrackingListComponent implements OnInit {
  public timeTrackList: any[];

  constructor(private socket: Socket, private timeTackingService: TimeTrackingService) {
  }

  ngOnInit(): void {
    this.getTimeTrackingList();
    this.socket.on('timeTrackAdded', () => {
      this.getTimeTrackingList();
    });
  }

  private getTimeTrackingList() {

    this.timeTackingService.getTodayTimeTrackingList()
      .subscribe((list) => this.timeTrackList = list);
  }
}

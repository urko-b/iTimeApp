import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
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
    console.log('socket.ioSocket', socket.ioSocket)
  }

  ngOnInit(): void {
    this.getTimeTrackingList();
    this.socket.on('timeTrackAdded', () => {
      this.getTimeTrackingList();
    });
  }

  private getTimeTrackingList() {

    this.timeTackingService.getTimeTrackingList()
      .subscribe((list) => this.timeTrackList = list);
  }
}

import { Component, OnInit } from '@angular/core';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';
import { Socket } from 'ngx-socket-io';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-time-tracking-bag-grid',
  templateUrl: './time-tracking-bag-grid.component.html',
  styleUrls: ['./time-tracking-bag-grid.component.scss']
})
export class TimeTrackingBagGridComponent implements OnInit {
  public timeTrackList: any[];
  public timeTrackColumns = [];

  private timeTrackAdedCallback: Function;

  constructor(private datePipe: DatePipe, private socket: Socket, private timeTackingService: TimeTrackingService) {
    this.timeTrackColumns = [
      {
        headerName: 'Entrada', field: 'work', sortable: true, filter: true, resizable: true,
        valueFormatter: (params) => {
          return this.datePipe.transform(new Date(params.value), 'dd/MM/yyyy HH:mm:ss');
        }
      },
      {
        headerName: 'Salida', field: 'break', sortable: true, filter: true, resizable: true,
        valueFormatter: (params) => {
          return this.datePipe.transform(new Date(params.value), 'dd/MM/yyyy HH:mm:ss');
        }
      },
      { headerName: 'Trabajado', field: 'workingTime', sortable: true, filter: true, resizable: true },
    ];
  }

  ngOnInit(): void {
    this.getTimeTrackingList();
    this.socket.on('timeTrackAdded', () => {
      this.timeTrackAdedCallback();
    });
  }

  private getTimeTrackingList() {
    this.timeTrackAdedCallback = this.getTimeTrackingList;
    this.timeTackingService.getTodayTimeTrackingList()
      .subscribe((list) => this.timeTrackList = list);
  }

  public timeTrackingBagToday() {
    this.timeTrackAdedCallback = this.timeTrackingBagToday;
    this.timeTackingService.timeTrackingBagToday()
      .subscribe((list) => this.timeTrackList = list);
  }
  public timeTrackingBagThisWeek() {
    this.timeTrackAdedCallback = this.timeTrackingBagThisWeek;
    this.timeTackingService.timeTrackingBagThisWeek()
      .subscribe((list) => this.timeTrackList = list);

  }
  public timeTrackingBagThisMonth() {
    this.timeTrackAdedCallback = this.timeTrackingBagThisMonth;
    this.timeTackingService.timeTrackingBagThisMonth()
      .subscribe((list) => this.timeTrackList = list);

  }
  public timeTrackingBagThisYear() {
    this.timeTrackAdedCallback = this.timeTrackingBagThisYear;
    this.timeTackingService.timeTrackingBagThisYear()
      .subscribe((list) => this.timeTrackList = list);

  }
}

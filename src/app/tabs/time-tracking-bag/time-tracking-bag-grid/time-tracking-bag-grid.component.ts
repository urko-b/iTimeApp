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
  public users = [];
  public userSelected?: string;

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

    this.timeTackingService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  private getTimeTrackingList() {
    this.timeTrackAdedCallback = this.getTimeTrackingList;
    this.timeTackingService.getTodayTimeTrackingList()
      .subscribe((list) => this.timeTrackList = list);
  }

  public timeTrackingBagToday() {
    this.timeTrackAdedCallback = this.timeTrackingBagToday;
    this.timeTackingService.timeTrackingBagToday(this.userSelected)
      .subscribe((list) => this.timeTrackList = list);
  }
  public timeTrackingBagThisWeek() {
    this.timeTrackAdedCallback = this.timeTrackingBagThisWeek;
    this.timeTackingService.timeTrackingBagThisWeek(this.userSelected)
      .subscribe((list) => this.timeTrackList = list);

  }
  public timeTrackingBagThisMonth() {
    this.timeTrackAdedCallback = this.timeTrackingBagThisMonth;
    this.timeTackingService.timeTrackingBagThisMonth(this.userSelected)
      .subscribe((list) => this.timeTrackList = list);

  }
  public timeTrackingBagThisYear() {
    this.timeTrackAdedCallback = this.timeTrackingBagThisYear;
    this.timeTackingService.timeTrackingBagThisYear(this.userSelected)
      .subscribe((list) => this.timeTrackList = list);
  }

  public timeTrackingByEmployer($event) {
    this.userSelected = $event.detail.value;
    this.timeTrackAdedCallback();
  }

}

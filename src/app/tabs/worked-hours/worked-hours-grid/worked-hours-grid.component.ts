import { Component, OnInit } from '@angular/core';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';
import { WorkedHoursService } from 'src/app/shared/services/worked-hours.service';
import { Socket } from 'ngx-socket-io';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import * as  momentDurationFormatSetup from 'moment-duration-format';
momentDurationFormatSetup(moment);

@Component({
  selector: 'app-worked-hours-grid',
  templateUrl: './worked-hours-grid.component.html',
  styleUrls: ['./worked-hours-grid.component.scss']
})
export class WorkedHoursGridComponent implements OnInit {
  public timeTrackList: any[];
  public timeTrackColumns = [];
  private gridApi;
  public users = [];
  public userSelected?: string;

  private timeTrackAdedCallback: Function;

  constructor(private datePipe: DatePipe,
    private socket: Socket,
    private timeTackingService: TimeTrackingService,
    private workedHoursService: WorkedHoursService) {
    this.initColumnsDefinition();
  }

  private initColumnsDefinition() {
    this.timeTrackColumns = [
      {
        headerName: 'Entrada', field: 'work', sortable: true, filter: true, resizable: true,
        valueFormatter: (params) => {
          if (params.value === '') { return ''; }
          return this.datePipe.transform(new Date(params.value), 'dd/MM/yyyy HH:mm:ss');
        }
      },
      {
        headerName: 'Salida', field: 'break', sortable: true, filter: true, resizable: true,
        valueFormatter: (params) => {
          if (params.value === '') { return ''; }
          return this.datePipe.transform(new Date(params.value), 'dd/MM/yyyy HH:mm:ss');
        }
      },
      {
        headerName: 'Trabajado', field: 'workingTime', sortable: true, filter: true, resizable: true,
        aggFunc: (values) => {
          let sum;
          values.forEach((value) => {
            sum = moment.duration(sum).add(moment.duration(value));
          });

          if (this.gridApi !== undefined && sum !== undefined) {
            var formatted = (moment.duration(sum.asSeconds(), 'seconds') as any).format("hh:mm:ss");

            const pinnedBottomRowData = [{ 'work': '', 'break': '', 'workingTime': formatted }];
            this.gridApi.setPinnedBottomRowData(pinnedBottomRowData);
          }
          return sum;
        }
      },
    ];
  }

  public onGridReady(params) {
    this.gridApi = params.api;
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
    this.workedHoursService.timeTrackingBagToday(this.userSelected)
      .subscribe((list) => this.timeTrackList = list);
  }

  public timeTrackingBagToday() {
    this.timeTrackAdedCallback = this.timeTrackingBagToday;
    this.workedHoursService.timeTrackingBagToday(this.userSelected)
      .subscribe((list) => this.timeTrackList = list);
  }
  public timeTrackingBagThisWeek() {
    this.timeTrackAdedCallback = this.timeTrackingBagThisWeek;
    this.workedHoursService.timeTrackingBagThisWeek(this.userSelected)
      .subscribe((list) => this.timeTrackList = list);

  }
  public timeTrackingBagThisMonth() {
    this.timeTrackAdedCallback = this.timeTrackingBagThisMonth;
    this.workedHoursService.timeTrackingBagThisMonth(this.userSelected)
      .subscribe((list) => this.timeTrackList = list);

  }
  public timeTrackingBagThisYear() {
    this.timeTrackAdedCallback = this.timeTrackingBagThisYear;
    this.workedHoursService.timeTrackingBagThisYear(this.userSelected)
      .subscribe((list) => this.timeTrackList = list);
  }

  public timeTrackingByEmployer($event) {
    this.userSelected = $event.detail.value;
    this.timeTrackAdedCallback();
  }

}

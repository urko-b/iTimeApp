import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';

@Component({
  selector: 'app-time-tracking-histroy-grid',
  templateUrl: './time-tracking-histroy-grid.component.html',
  styleUrls: ['./time-tracking-histroy-grid.component.scss'],
})
export class TimeTrackingHistroyGridComponent implements OnInit {

  public timeTrackingHistoryList: any;
  public columnDefs = [];

  constructor(private socket: Socket, private timeTrackingService: TimeTrackingService) {
    this.columnDefs = [
      { headerName: 'Name', field: 'user.name', sortable: true, filter: true, resizable: true },
      { headerName: 'Surname', field: 'user.surname', sortable: true, filter: true, resizable: true },
      { headerName: 'Email', field: 'user.email', sortable: true, filter: true, resizable: true },
      {
        headerName: 'Date', field: 'date', sortable: true, filter: true, resizable: true,
        valueFormatter: (params) => {
          return new Date(params.value);
        }
      },
      {
        headerName: 'Position', field: 'position', sortable: true, filter: true, resizable: true,
        valueFormatter: (params) => {
          if (params.value === undefined) {
            return '';
          }
          return JSON.stringify(params.value);
        }
      },
      {
        headerName: 'Is Working', field: 'is_working', sortable: true, filter: true, resizable: true,
        cellRenderer: (params) => {
          return params.value === true
            ? '<i class="fas fa-circle working" style="color:green"></i>' : '<i class="fas fa-circle pause" style="color:red"></i>';
        }
      }
    ];
  }

  ngOnInit() {
    this.socket.on('timeTrackAdded', () => {
      this.getTimeTrackingHistory();
    });

    this.getTimeTrackingHistory();
  }

  private getTimeTrackingHistory() {
    this.timeTrackingService.getTimeTrackingList()
      .subscribe(data => this.timeTrackingHistoryList = data);
  }

}

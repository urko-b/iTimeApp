import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';

@Component({
  selector: 'app-time-tracking-histroy-grid',
  templateUrl: './time-tracking-histroy-grid.component.html',
  styleUrls: ['./time-tracking-histroy-grid.component.scss'],
})
export class TimeTrackingHistroyGridComponent implements OnInit {


  private timeTrackingHistoryList: any;
  private columnDefs = [
    { headerName: 'Name', field: 'user.name', sortable: true, filter: true },
    { headerName: 'Surname', field: 'user.surname', sortable: true, filter: true },
    { headerName: 'Email', field: 'user.email', sortable: true, filter: true },
    {
      headerName: 'Date', field: 'date', sortable: true, filter: true,
      valueFormatter: (params) => {
        console.log('params', params);
        return new Date(params.value);
      }
    },
    { headerName: 'Is Working', field: 'is_working', sortable: true, filter: true }
  ];

  constructor(private timeTrackingService: TimeTrackingService) { }

  ngOnInit() {
    this.timeTrackingService.getTimeTrackingList()
      .subscribe(data => this.timeTrackingHistoryList = data);
  }

}

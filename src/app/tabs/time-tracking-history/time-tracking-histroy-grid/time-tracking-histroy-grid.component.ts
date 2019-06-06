import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';
import { DatePipe } from '@angular/common';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-time-tracking-histroy-grid',
  templateUrl: './time-tracking-histroy-grid.component.html',
  styleUrls: ['./time-tracking-histroy-grid.component.scss'],
})
export class TimeTrackingHistroyGridComponent implements OnInit {

  public timeTrackingHistoryList: any;
  public columnDefs = [];
  public gridApi;
  public gridColumnApi;
  public rows = 10;
  public page = 0;

  constructor(platform: Platform, private datePipe: DatePipe, private socket: Socket, private timeTrackingService: TimeTrackingService) {
    platform.ready().then(() => {

      const width = platform.width();

      this.columnDefs = [
        // { headerName: 'Nombre', field: 'user.name', sortable: true, filter: true, resizable: true, width: width < 600 ? 80 : 200 },
        // { headerName: 'Apellidos', field: 'user.surname', sortable: true, filter: true, resizable: true },
        { headerName: 'Email', field: 'user.email', sortable: true, filter: true, resizable: true, width: width < 600 ? 140 : 250 },
        {
          headerName: 'Fecha', field: 'date', sortable: true, filter: true, resizable: true, width: width < 600 ? 150 : 250,
          valueFormatter: (params) => {
            return this.datePipe.transform(new Date(params.value), 'dd/MM/yyyy HH:mm:ss');
          }
        },
        // {
        //   headerName: 'Position', field: 'position', sortable: true, filter: true, resizable: true,
        //   valueFormatter: (params) => {
        //     if (params.value === undefined) {
        //       return '';
        //     }
        //     return JSON.stringify(params.value);
        //   }
        // },
        {
          headerName: 'Trabajo/Pausa', field: 'is_working', sortable: true, filter: true, resizable: true, width: width < 600 ? 70 : 150,
          cellRenderer: (params) => {
            return params.value === true
              ? '<i class="fas fa-circle working" style="color:green"></i>' : '<i class="fas fa-circle pause" style="color:red"></i>';
          }
        }
      ];
    })
  }

  ngOnInit() {
    this.socket.on('timeTrackAdded', () => {
      this.getTimeTrackingHistory({});
    });

    this.getTimeTrackingHistory({});
  }

  private getTimeTrackingHistory({ rows = 10, page = 0 }) {
    this.timeTrackingService.getTimeTrackingList({ rows, page })
      .subscribe(data => this.timeTrackingHistoryList = data);
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getTimeTrackingHistory({ rows: this.rows, page: this.page });
    this.gridApi.sizeColumnsToFit();
    window.onresize = () => {
      this.gridApi.sizeColumnsToFit();
    }
  }


  onPaginationChanged() {
    console.log("onPaginationPageLoaded");
    if (this.gridApi) {
      this.rows = this.gridApi.paginationGetPageSize();
      this.page = this.gridApi.paginationGetCurrentPage();
    }
  }

}

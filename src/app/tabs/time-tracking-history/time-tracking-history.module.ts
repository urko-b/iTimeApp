import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackingHistoryRoutingModule } from './time-tracking-history-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimeTrackingHistroyGridComponent } from './time-tracking-histroy-grid/time-tracking-histroy-grid.component';

import { AgGridModule } from 'ag-grid-angular';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = {
  url: environment.socket_url
};

@NgModule({
  declarations: [
    TimeTrackingHistroyGridComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    SocketIoModule.forRoot(config),
    AgGridModule.withComponents([]),
    TimeTrackingHistoryRoutingModule
  ],
  exports: [
    TimeTrackingHistroyGridComponent
  ]
})
export class TimeTrackingHistoryModule { }

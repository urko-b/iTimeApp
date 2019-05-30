import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeTrackingListComponent } from './time-tracking-list/time-tracking-list.component';

import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
// ...other imports
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { TimeTrackingRoutingModule } from './time-tracking-routing.module';

const config: SocketIoConfig = {
  url: environment.socket_url
};

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    SocketIoModule.forRoot(config),
    TimeTrackingRoutingModule
  ],
  declarations: [
    TimeTrackingComponent,
    TimeTrackingListComponent
  ]
})
export class TimeTrackingModule { }

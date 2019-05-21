import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeTrackingListComponent } from './time-tracking-list/time-tracking-list.component';

import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { TimeTrackingRoutingModule } from './time-tracking-routing.module';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';
// ...other imports
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: 'http://localhost:4444'
};

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TimeTrackingRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    TimeTrackingComponent,
    TimeTrackingListComponent
  ],
  providers: [
    TimeTrackingService
  ]
})
export class TimeTrackingModule { }

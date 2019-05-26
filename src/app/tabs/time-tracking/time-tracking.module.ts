import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeTrackingListComponent } from './time-tracking-list/time-tracking-list.component';

import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';
// ...other imports
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = {
  url: environment.socket_url
};

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    TimeTrackingComponent,
    TimeTrackingListComponent
  ],
  exports: [
    TimeTrackingComponent,
    TimeTrackingListComponent
  ]
})
export class TimeTrackingModule { }

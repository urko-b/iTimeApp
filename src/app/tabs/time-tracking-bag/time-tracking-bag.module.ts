import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';

// ...other imports
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { TimeTrackingBagRoutingModule } from './time-tracking-bag-routing.module';
import { TimeTrackingBagGridComponent } from './time-tracking-bag-grid/time-tracking-bag-grid.component';

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
    TimeTrackingBagRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [
    TimeTrackingBagGridComponent
  ],
  providers: [
    DatePipe
  ]
})
export class TimeTrackingBagModule { }

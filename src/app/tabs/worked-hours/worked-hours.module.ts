import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';

// ...other imports
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { WorkedHoursRoutingModule } from './worked-hours-routing.module';
import { WorkedHoursGridComponent } from './worked-hours-grid/worked-hours-grid.component';

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
    WorkedHoursRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [
    WorkedHoursGridComponent
  ],
  providers: [
    DatePipe
  ]
})
export class WorkedHoursModule { }

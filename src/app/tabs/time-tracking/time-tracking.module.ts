import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeTrackingService } from '../../shared/services/time-tracking.service';
import { TimeTrackingListComponent } from './time-tracking-list/time-tracking-list.component';

import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { TimeTrackingRoutingModule } from './time-tracking-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TimeTrackingRoutingModule
  ],
  declarations: [
    TimeTrackingComponent,
    TimeTrackingListComponent
  ],
  providers: [
    TimeTrackingService,
  ]
})
export class TimeTrackingModule { }

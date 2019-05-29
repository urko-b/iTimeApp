import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackingButtonsComponent } from './time-tracking-buttons/time-tracking-buttons.component';
import { TimeTrackingClockComponent } from './time-tracking-clock/time-tracking-clock.component';
import { TimeTrackingClokService } from './time-tracking-clock/time-tracking-clock.service';
import { TimeTrackingButtonsRoutingModule } from './time-tracking-buttons-routing.module';
import { IonicModule } from '@ionic/angular';
import { TimeTrackingModule } from '../time-tracking/time-tracking.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TimeTrackingButtonsComponent,
    TimeTrackingClockComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    TimeTrackingModule,
    TimeTrackingButtonsRoutingModule
  ],
  exports: [],
  providers: [
    TimeTrackingClokService
  ],
})
export class TimeTrackingButtonsModule { }

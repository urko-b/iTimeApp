import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackingButtonsComponent } from './time-tracking-buttons/time-tracking-buttons.component';
import { TimeTrackingClockComponent } from './time-tracking-clock/time-tracking-clock.component';
import { TimeTrackingClokService } from './time-tracking-clock/time-tracking-clock.service';
import { TimeTrackingButtonsRoutingModule } from './time-tracking-buttons-routing.module';
import { IonicModule } from '@ionic/angular';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';

@NgModule({
  declarations: [
    TimeTrackingButtonsComponent,
    TimeTrackingClockComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    TimeTrackingButtonsRoutingModule],
  exports: [],
  providers: [
    TimeTrackingClokService,
    TimeTrackingService
  ],
})
export class TimeTrackingButtonsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackingButtonsComponent } from './time-tracking-buttons/time-tracking-buttons.component';
import { TimeTrackingClockComponent } from './time-tracking-clock/time-tracking-clock.component';
import { TimeTrackingClokService } from './time-tracking-clock/time-tracking-clock.service';
import { TimeTrackingRoutingModule } from './time-tracking-routing.module';
import { IonicModule } from '@ionic/angular';
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
    TimeTrackingRoutingModule
  ],
  exports: [],
  providers: [
    TimeTrackingClokService
  ],
})
export class TimeTrackingModule { }

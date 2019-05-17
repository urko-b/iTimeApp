import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeTrackingButtonsComponent } from './time-tracking-buttons/time-tracking-buttons.component';
import { TimeTrackingService } from './shared/time-tracking.service';
import { TimeTrackingListComponent } from './time-tracking-list/time-tracking-list.component';
import { TimeTrackingClockComponent } from './time-tracking-clock/time-tracking-clock.component';
import { TimeTrackingClokService } from './time-tracking-clock/time-tracking-clock.service';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TimeTrackingListComponent }])
  ],
  declarations: [
    TimeTrackingComponent,
    TimeTrackingButtonsComponent,
    TimeTrackingClockComponent,
    TimeTrackingListComponent
  ],
  providers: [
    TimeTrackingService,
    TimeTrackingClokService
  ]
})
export class TimeTrackingModule { }

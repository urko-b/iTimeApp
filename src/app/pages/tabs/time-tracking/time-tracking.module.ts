import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeTrackingPage } from './time-tracking/time-tracking.page';
import { TimeTrackingService } from './time-tracking.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TimeTrackingPage }])
  ],
  declarations: [TimeTrackingPage],
  providers: [
    TimeTrackingService
  ]
})
export class TimeTrackingPageModule { }

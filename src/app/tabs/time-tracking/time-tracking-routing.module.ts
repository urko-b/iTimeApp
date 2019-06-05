import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimeTrackingButtonsComponent } from './time-tracking-buttons/time-tracking-buttons.component';

const routes: Routes = [
  { path: '', component: TimeTrackingButtonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackingRoutingModule { }

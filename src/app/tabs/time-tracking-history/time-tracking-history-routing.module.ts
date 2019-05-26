import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTrackingHistroyGridComponent } from './time-tracking-histroy-grid/time-tracking-histroy-grid.component';

const routes: Routes = [
  {
    path: '',
    component: TimeTrackingHistroyGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackingHistoryRoutingModule { }

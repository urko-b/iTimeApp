import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimeTrackingBagGridComponent } from './time-tracking-bag-grid/time-tracking-bag-grid.component';

const routes: Routes = [
  { path: '', component: TimeTrackingBagGridComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackingBagRoutingModule { }

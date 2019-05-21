import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimeTrackingListComponent } from './time-tracking-list/time-tracking-list.component';


const routes: Routes = [
  { path: '', component: TimeTrackingListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackingRoutingModule { }

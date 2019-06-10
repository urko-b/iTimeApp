import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WorkedHoursGridComponent } from './worked-hours-grid/worked-hours-grid.component';

const routes: Routes = [
  { path: '', component: WorkedHoursGridComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkedHoursRoutingModule { }

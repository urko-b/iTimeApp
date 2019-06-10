import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { WorkedHoursCanActivateGuard } from '../auth/worked-hours.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'time-tracking',
        loadChildren: './time-tracking/time-tracking.module#TimeTrackingModule'
      },
      {
        path: 'worked-hours',
        canActivate: [WorkedHoursCanActivateGuard],
        loadChildren: './worked-hours/worked-hours.module#WorkedHoursModule'
      },
      {
        path: 'time-tracking-history-list',
        loadChildren: './time-tracking-history/time-tracking-history.module#TimeTrackingHistoryModule'
      },
      {
        path: '',
        redirectTo: 'time-tracking',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: 'time-tracking-buttons',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

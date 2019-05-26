import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'time-tracking-buttons',
        loadChildren: './time-tracking-buttons/time-tracking-buttons.module#TimeTrackingButtonsModule'
      },
      {
        path: 'time-tracking-history-list',
        loadChildren: './time-tracking-history/time-tracking-history.module#TimeTrackingHistoryModule'
      },
      {
        path: '',
        redirectTo: 'time-tracking-buttons',
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

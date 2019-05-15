import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'time-tracking',
        children: [
          {
            path: '',
            loadChildren: './time-tracking/time-tracking.module#TimeTrackingPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'time-tracking',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'time-tracking',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

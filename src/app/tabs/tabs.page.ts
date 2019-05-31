import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public show_time_tracking_bag = false;
  constructor() {
    const roles = localStorage.getItem('roles');
    if (roles !== undefined && roles !== null) {
      this.show_time_tracking_bag = JSON.parse(roles).some((rol) => rol === 'show_time_tracking_bag');
    }

  }
}

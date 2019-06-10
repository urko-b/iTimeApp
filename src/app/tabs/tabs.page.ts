import { Component } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public show_time_tracking_bag = false;
  constructor(private localStorageService: LocalStorageService) {
    const roles = this.localStorageService.getItem('roles');
    if (roles !== undefined && roles !== null) {
      this.show_time_tracking_bag = JSON.parse(roles).some((rol) => rol === 'show_time_tracking_bag');
    }

  }
}

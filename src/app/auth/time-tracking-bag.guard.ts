import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LocalStorageService } from '../shared/services/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class TimeTrackingBagCanActivateGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService) {
  }
  canActivate() {

    const roles = this.localStorageService.getItem('roles');
    if (roles === undefined || roles === null) {
      return false;
    }

    return JSON.parse(roles).some((rol) => rol === 'show_time_tracking_bag');
  }
}

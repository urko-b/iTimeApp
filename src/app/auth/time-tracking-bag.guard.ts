import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TimeTrackingBagCanActivateGuard implements CanActivate {
  canActivate() {

    const roles = localStorage.getItem('roles');
    if (roles === undefined || roles === null) {
      return false;
    }

    return JSON.parse(roles).some((rol) => rol === 'show_time_tracking_bag');
  }
}

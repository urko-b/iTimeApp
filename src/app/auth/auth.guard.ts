import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../shared/services/login.service';


@Injectable({
  providedIn: 'root'
})
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    if (!this.loginService.isAuthenticated()) {
      console.log('No estás logueado');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}

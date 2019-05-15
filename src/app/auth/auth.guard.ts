import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (!this.authService.isAuthenticated()) {
      console.log('No estás logueado');
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}

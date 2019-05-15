import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) {
  }

  public login(email: string, password: string) {
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.post(`${environment.api_url}/api/v1/user/login`, body, { headers }).subscribe((success: boolean) => {
      if (success) {
        this.authService.authenticate();
        this.router.navigate(['/tabs']);
      }
    });
  }
}

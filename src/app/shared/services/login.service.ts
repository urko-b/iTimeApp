import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {
  public subscription$: Subject<any> = new Subject();
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router) {
  }

  public login(email: string, password: string): void {
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.post(`${environment.api_url}/user/login`, body, { headers })
      .subscribe((email: string) => {
        if (email !== undefined && email !== null) {
          localStorage.setItem('email', email);
          this.authService.authenticate(() => this.router.navigate(['/tabs']));
        }
      }, (error) => {
        this.subscription$.next(false);
      });
  }

  public logout(): void {
    localStorage.removeItem('requests-token');
    localStorage.removeItem('guard-token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }
}

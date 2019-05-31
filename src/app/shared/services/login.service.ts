import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {
  public subscription$: Subject<any> = new Subject();
  constructor(
    private httpClient: HttpClient,
    private router: Router) {
  }

  public login(email: string, password: string): void {
    const body = { email, password };
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', environment.api_secret);
    this.httpClient.post(`${environment.api_url}/user/login`, body, { headers, responseType: 'text' })
      .subscribe((authToken: string) => {
        if (authToken === undefined && authToken === null) {
          console.log('return undefined in login');
          return;
        }
        console.log('token', authToken)
        localStorage.setItem('requests-token', authToken);

        localStorage.setItem('guard-token', generateToken());
        this.router.navigate(['/tabs']);
      }, (error) => {
        this.subscription$.next(false);
      });
  }

  public logout(): void {
    localStorage.removeItem('requests-token');
    localStorage.removeItem('guard-token');
    this.router.navigate(['/login']);
  }



  public isAuthenticated(): boolean {
    const guardToken = localStorage.getItem('guard-token');
    if (guardToken === undefined || guardToken == null) {
      return false;
    }

    if (!isTokenValid(guardToken)) {
      return false;
    }

    return true;
  }
}



const encode = (plainValue: string): string => {
  return btoa(plainValue);
};

const decode = (encodedValue: string): string => {
  return atob(encodedValue);
};

const generateToken = (): string => {
  const nowDate = new Date(Date.now());
  nowDate.setHours(nowDate.getHours() + 1);
  return encode(nowDate.toString());
};

const isTokenValid = (token: any): boolean => {
  const dateToken: Date = new Date(Date.parse(decode(token)));
  const dateNow: Date = new Date(Date.now());
  return dateToken > dateNow;
};


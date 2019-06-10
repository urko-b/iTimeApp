import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { EncryptService } from './encrypt.service';

@Injectable()
export class LoginService {
  public subscription$: Subject<any> = new Subject();
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService,
    private encryptService: EncryptService) {
  }

  public login(email: string, password: string): void {
    this.localStorageService.clear();
    const body = { email, password };
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', environment.api_secret);
    this.httpClient.post(`${environment.api_url}/user/login`, body, { headers, responseType: 'text' })
      .subscribe((authToken: string) => {
        if (authToken === undefined && authToken === null) {
          return;
        }

        this.localStorageService.setItem('requests-token', authToken);
        this.localStorageService.setItem('guard-token', this.encryptService.generateToken());

        this.httpClient.get(`${environment.api_url}/user/roles`)
          .subscribe((roles) => {
            if (roles !== null && roles !== undefined) {
              this.localStorageService.setItem('roles', JSON.stringify(roles));
            }
            this.router.navigate(['/tabs']);
          });
      }, (error) => {
        this.subscription$.next(false);
      });
  }

  public logout(): void {
    this.localStorageService.clear();
    this.router.navigate(['/login']);
  }



  public isAuthenticated(): boolean {
    const guardToken = this.localStorageService.getItem('guard-token');
    if (guardToken === undefined || guardToken == null) {
      return false;
    }

    if (!this.encryptService.isTokenValid(guardToken)) {
      return false;
    }

    return true;
  }
}





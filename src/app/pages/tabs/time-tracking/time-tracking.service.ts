import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable()
export class TimeTrackingService {
  public isWorking$: Subject<any> = new Subject();
  //private isWorking = false;
  constructor(private httpClient: HttpClient) { }

  public send(): void {
    const requestToken = localStorage.getItem('requests-token');
    const email = localStorage.getItem('email');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${requestToken}` });
    const date: Date = new Date(Date.now());
    this.httpClient.post(`${environment.localhost_api_url}/timeTracking`, { email, date }, { headers })
      .subscribe((response) => {
        this.isWorking$.next(response['isWorking']);
      }, (error) => {
        this.isWorking$.next(false);
      });
  }

  public getIsWorking(): void {
    const requestToken = localStorage.getItem('requests-token');
    const email = localStorage.getItem('email');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${requestToken}` });
    const date: Date = new Date(Date.now());
    this.httpClient.post(`${environment.localhost_api_url}/timeTracking/isWorking`, { email, date }, { headers })
      .subscribe((response) => {
        this.isWorking$.next(response['isWorking']);
      }, (error) => {
        this.isWorking$.next(false);
      });

  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { GeolocationService } from './geolocation.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TimeTrackingService implements OnDestroy {
  public isWorking$: Subject<any>;
  public currentWorkingTime$: Subject<any>;

  constructor(private httpClient: HttpClient,
    private geolocationService: GeolocationService) {
    this.isWorking$ = new Subject();
    this.currentWorkingTime$ = new Subject();
  }

  public send(): void {
    const email = localStorage.getItem('email-token');
    const date = new Date().toISOString();

    this.geolocationService.getCurrentPosition()
      .pipe(
        switchMap(location => {
          const body = { date, position: { longitude: location.coords.longitude, latitude: location.coords.latitude } };
          return this.httpClient.post(`${environment.api_url}/timeTracking`, body);
        })
      )
      .subscribe((response) => {
        this.isWorking$.next(response['isWorking']);
      }, (error) => {
        this.isWorking$.next(false);
      });
  }

  public getIsWorking(): void {
    this.httpClient.post(`${environment.api_url}/timeTracking/isWorking`, {})
      .subscribe((response) => {
        this.isWorking$.next(response['isWorking']);
      }, (error) => {
        this.isWorking$.next(false);
      });
  }

  public getTodayTimeTrackingList(): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/timeTracking/todayBagOfHoursWorked`);
  }

  public getTimeTrackingList(): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/timeTracking`);
  }



  public timeTrackingBagToday(): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/timeTracking/timeTrackingBagToday`);
  }

  public timeTrackingBagThisWeek(): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/timeTracking/timeTrackingBagThisWeek`);
  }

  public timeTrackingBagThisMonth(): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/timeTracking/timeTrackingBagThisMonth`);
  }

  public timeTrackingBagThisYear(): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/timeTracking/timeTrackingBagThisYear`);
  }







  ngOnDestroy(): void {
    this.isWorking$.next(null);
    this.isWorking$.complete();

    this.currentWorkingTime$.next(null);
    this.currentWorkingTime$.complete();
  }
}

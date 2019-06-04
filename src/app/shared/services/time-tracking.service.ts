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

  constructor(private httpClient: HttpClient
    /*,private geolocationService: GeolocationService */) {
    this.isWorking$ = new Subject();
    this.currentWorkingTime$ = new Subject();
  }

  public send(): void {
    const date = new Date().toISOString();

    // this.geolocationService.getCurrentPosition()
    //   .pipe(
    //     switchMap(location => {
    //       const body = { date, position: { longitude: location.coords.longitude, latitude: location.coords.latitude } };
    //       return this.httpClient.post(`${environment.api_url}/timeTracking`, body);
    //     })
    //   )
    //   .subscribe((response) => {
    //     this.isWorking$.next(response['isWorking']);
    //   }, (error) => {
    //     this.isWorking$.next(false);
    //   });
    this.httpClient.post(`${environment.api_url}/timeTracking`, { date })
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

  public getTimeTrackingList({ rows = 10, page = 0 }): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/timeTracking?rows=${rows}&page=${page}`);
  }








  public getUsers(): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/user`);
  }







  ngOnDestroy(): void {
    this.isWorking$.next(null);
    this.isWorking$.complete();

    this.currentWorkingTime$.next(null);
    this.currentWorkingTime$.complete();
  }
}

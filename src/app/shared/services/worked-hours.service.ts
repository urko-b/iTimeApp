import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WorkedHoursService {
  constructor(
    private httpClient: HttpClient) {
  }


  public timeTrackingBagToday(email = ''): Observable<any> {
    return this.getWorkedHours({ email });
  }

  public timeTrackingBagThisWeek(email = ''): Observable<any> {
    const from = moment().startOf('week').toDate();
    const to = moment().endOf('week').toDate();
    return this.getWorkedHours({ from, to, email });
  }

  public timeTrackingBagThisMonth(email = ''): Observable<any> {
    const from = moment().startOf('month').toDate();
    const to = moment().endOf('month').toDate();
    return this.getWorkedHours({ from, to, email });
  }

  public timeTrackingBagThisYear(email = ''): Observable<any> {
    const from = moment().startOf('year').toDate();
    const to = moment().endOf('year').toDate();
    return this.getWorkedHours({ from, to, email });
  }

  private getWorkedHours({ from = null, to = null, email = null }): Observable<any> {
    let queryParams = '';
    if (from !== undefined && from !== null) {
      queryParams = `?from=${from}`;
    }

    if (to !== undefined && to !== null) {
      queryParams = queryParams !== '' ? `${queryParams}&` : '?';
      queryParams = `${queryParams}to=${to}`;
    }

    if (email !== undefined) {
      queryParams = queryParams !== '' ? `${queryParams}&` : '?';
      queryParams = `${queryParams}email=${email}`;
    }

    return this.httpClient.get(`${environment.api_url}/workedHours${queryParams}`);
  }
}

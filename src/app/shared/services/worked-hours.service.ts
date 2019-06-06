import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WorkedHoursService {
  private workedHoursListUrl = `${environment.api_url}/workedHours`;
  private workedHoursUrl = `${environment.api_url}/workedHours/todayWorkedHours`;

  constructor(
    private httpClient: HttpClient) {
  }

  public getTodayWorkedHours(email = ''): Observable<any> {
    return this.getWorkedHours({ url: this.workedHoursUrl, email });
  }

  public getTodayWorkedHoursList(email = ''): Observable<any> {
    return this.getWorkedHours({ url: this.workedHoursListUrl, email });
  }

  public getThisWeekWorkedHoursList(email = ''): Observable<any> {
    const from = moment().startOf('week').toDate();
    const to = moment().endOf('week').toDate();
    return this.getWorkedHours({ url: this.workedHoursListUrl, from, to, email });
  }

  public getThisMonthWorkedHoursList(email = ''): Observable<any> {
    const from = moment().startOf('month').toDate();
    const to = moment().endOf('month').toDate();
    return this.getWorkedHours({ url: this.workedHoursListUrl, from, to, email });
  }

  public getThisYearWorkedHoursList(email = ''): Observable<any> {
    const from = moment().startOf('year').toDate();
    const to = moment().endOf('year').toDate();
    return this.getWorkedHours({ url: this.workedHoursListUrl, from, to, email });
  }

  private getWorkedHours({ url = '', from = undefined, to = undefined, email = null }): Observable<any> {
    return pipe(
      (params) => getQueryParam('from', from, params),
      (params) => getQueryParam('to', to, params),
      (params) => getQueryParam('email', email, params),
      (params) => this.httpClient.get(`${url}${params}`)
    )('');
  }
}

const getQueryParam = (queryParamName, queryParamValue, queryParams) => {
  if (queryParamName !== undefined) {
    queryParams = queryParams !== '' ? `${queryParams}&` : '?';
    queryParams = `${queryParams}${queryParamName}=${queryParamValue}`;
  }
  return queryParams;
};

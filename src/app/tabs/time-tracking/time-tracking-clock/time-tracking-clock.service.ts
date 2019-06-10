import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TimeTrackingClock } from './time-trackig-clock.model';
import { WorkedHoursService } from 'src/app/shared/services/worked-hours.service';
import * as moment from 'moment';

@Injectable()
export class TimeTrackingClokService {
  private timetracking$ = new Subject<any>();
  private clock$ = new Observable<any>();
  private model: TimeTrackingClock;

  constructor(private workedHoursService: WorkedHoursService) {
    this.workedHoursService.getTodayWorkedHours().subscribe((workedHours) => {
      this.clock$ = timer(0, 1000).pipe(map(t => moment(workedHours)), shareReplay(1));
    });
  }


  getClock(): Subject<any> {
    this.clock$.subscribe(t => {
      this.timetracking$.next(t);
    });
    return this.timetracking$;
  }
}

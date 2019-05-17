import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TimeTrackingClock } from './time-trackig-clock.model';

@Injectable()
export class TimeTrackingClokService {
  private timetracking$ = new Subject<TimeTrackingClock>();
  private clock$ = new Observable<Date>();
  private model: TimeTrackingClock;

  constructor() {
    this.clock$ = timer(0, 1000).pipe(map(t => new Date()), shareReplay(1));
  }

  getClock(): Subject<TimeTrackingClock> {
    this.clock$.subscribe(t => {
      this.model = {
        hours: t.getHours(),
        minutes: (t.getMinutes() < 10) ? '0' + t.getMinutes() : t.getMinutes().toString(),
        dayAndMonth: t.toLocaleString('es-ES', { day: '2-digit', month: 'long' }),
        weekDay: t.toLocaleString('es-ES', { weekday: 'long' }),
        seconds: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString()
      };
      this.timetracking$.next(this.model);
    });
    return this.timetracking$;
  }
}

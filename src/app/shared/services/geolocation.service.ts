import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Observable, from } from 'rxjs';

@Injectable()
export class GeolocationService {
  constructor(private geolocation: Geolocation) { }

  public getCurrentPosition(): Observable<Geoposition> {
    return from(this.geolocation.getCurrentPosition());
  }
}

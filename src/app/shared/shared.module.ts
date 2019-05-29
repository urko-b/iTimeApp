import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { LoginService } from './services/login.service';
import { TimeTrackingService } from './services/time-tracking.service';
import { GeolocationService } from './services/geolocation.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    CommonModule,
  ],
  exports: [],
  providers: [
    LoginService,
    TimeTrackingService,
    Geolocation,
    GeolocationService
  ],
})
export class SharedModule { }

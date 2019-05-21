import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { LoginService } from './services/login.service';
import { TimeTrackingService } from './services/time-tracking.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    CommonModule
  ],
  exports: [],
  providers: [
    LoginService,
    TimeTrackingService
  ],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    CommonModule
  ],
  exports: [],
  providers: [
    LoginService
  ],
})
export class SharedModule { }

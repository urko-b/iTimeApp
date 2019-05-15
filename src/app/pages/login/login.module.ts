import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    LoginRoutingModule,
    SharedModule
  ],
  exports: [],
})
export class LoginModule { }

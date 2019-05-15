import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    IonicModule,
    LoginRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: [
    LoginService
  ],
})
export class LoginModule { }

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public success = true;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.subscription$.subscribe((success: boolean) => {
      this.success = success;
    });
  }

  public login(form): void {
    this.loginService.login(form.form.value.email, form.form.value.password);
  }
}

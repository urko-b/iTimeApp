import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  public login(form): void {
    console.log('form.form.value', form.form.value);
    this.loginService.login(form.form.value.email, form.form.value.password);
  }
}

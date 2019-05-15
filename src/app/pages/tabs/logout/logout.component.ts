import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../shared/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void { }

  public logout(): void {
    this.loginService.logout();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const encode = (plainValue: string): string => {
  return btoa(plainValue);
};

const decode = (encodedValue: string): string => {
  return atob(encodedValue);
};

const generateToken = (): string => {
  const nowDate = new Date(Date.now());
  nowDate.setHours(nowDate.getHours() + 1);
  return encode(nowDate.toString());
};

const isTokenValid = (token: any): boolean => {
  const dateToken: Date = new Date(Date.parse(decode(token)));
  const dateNow: Date = new Date(Date.now());
  return dateToken > dateNow;
};

@Injectable()
export class AuthService {
  constructor(public httpClient: HttpClient) { }

  public authenticate(): void {
    const headers: HttpHeaders = new HttpHeaders({ 'Authorization': environment.api_secret });
    this.httpClient.get(`${environment.api_url}/api/v1/auth`, { headers }).subscribe((responseToken: string) => {
      localStorage.setItem('requests-token', responseToken);
      localStorage.setItem('guard-token', generateToken());
    });
  }

  public isAuthenticated(): boolean {
    const guardToken = localStorage.getItem('guard-token');
    if (!guardToken) {
      return false;
    }

    if (!isTokenValid(guardToken)) {
      return false;
    }

    return true;
  }
}



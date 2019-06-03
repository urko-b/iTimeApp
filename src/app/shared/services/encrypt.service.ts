import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class EncryptService {

  public decode(encodedValue: string): string {
    return atob(encodedValue);
  }

  public generateToken(): string {
    const nowDate = new Date(Date.now());
    nowDate.setHours(nowDate.getHours() + 1);
    return this.encode(nowDate.toString());
  }


  public encode(plainValue: string): string {
    return btoa(plainValue);
  };


  public isTokenValid(token: any): boolean {
    const dateToken: Date = new Date(Date.parse(this.decode(token)));
    const dateNow: Date = new Date(Date.now());
    return dateToken > dateNow;
  }
}

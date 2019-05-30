// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
// import { environment } from 'src/environments/environment';


// const encode = (plainValue: string): string => {
//   return btoa(plainValue);
// };

// const decode = (encodedValue: string): string => {
//   return atob(encodedValue);
// };

// const generateToken = (): string => {
//   const nowDate = new Date(Date.now());
//   nowDate.setHours(nowDate.getHours() + 1);
//   return encode(nowDate.toString());
// };

// const isTokenValid = (token: any): boolean => {
//   const dateToken: Date = new Date(Date.parse(decode(token)));
//   const dateNow: Date = new Date(Date.now());
//   return dateToken > dateNow;
// };

// @Injectable()
// export class AuthService {

//   private httpClient: HttpClient;
//   constructor(handler: HttpBackend) {
//     this.httpClient = new HttpClient(handler);
//   }

//   // public authenticate(whenComplete?: Function) {
//   //   const headers: HttpHeaders = new HttpHeaders({ 'Authorization': environment.api_secret });
//   //   this.httpClient.get(`${environment.api_url}/auth`, { headers, responseType: 'text' })
//   //     .subscribe((responseToken: string) => {
//   //       localStorage.setItem('requests-token', responseToken);
//   //       localStorage.setItem('guard-token', generateToken());
//   //     }, null, () => whenComplete());
//   // }

//   public isAuthenticated(): boolean {
//     const guardToken = localStorage.getItem('guard-token');
//     if (guardToken === undefined || guardToken == null) {
//       return false;
//     }

//     if (!isTokenValid(guardToken)) {
//       return false;
//     }

//     return true;
//   }
// }



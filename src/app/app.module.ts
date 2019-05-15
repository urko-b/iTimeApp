import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyErrorHandler } from './shared/error.handler';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyErrorHandler } from './shared/error.handler';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    SharedModule,
    IonicModule.forRoot(),
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: MyErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

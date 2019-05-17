import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SharedModule
  ],
  declarations: [
    TabsPage,
    LogoutComponent
  ]
})
export class TabsPageModule { }

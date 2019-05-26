import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LicenseManager } from 'ag-grid-enterprise';

LicenseManager.setLicenseKey('Evaluation_License-_Not_For_Production_Valid_Until_20_July_2019__MTU2MzU3NzIwMDAwMA==5c770ad946494bbff7fa63fea0ab8e40');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

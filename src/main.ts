import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Component , OnInit} from '@angular/core';
declare var device;
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

export class AppComponent implements OnInit {
  ngOnInit() {
  document.addEventListener('deviceready', function() {
    alert(device.platform);
    }, false);
  }
}

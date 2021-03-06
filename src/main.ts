import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableAkitaProdMode, persistState, akitaConfig } from '@datorama/akita';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

akitaConfig({
  resettable: true
});

persistState();

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

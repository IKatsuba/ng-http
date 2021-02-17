import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { platformHttpDynamic } from '@ng-http/platform';

enableProdMode();

platformHttpDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

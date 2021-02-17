import {
  ApplicationModule,
  ErrorHandler,
  NgModule,
  RendererFactory2,
} from '@angular/core';
import { HttpRendererFactory } from './renderer';
import { HttpErrorHandler } from './error-handler';

@NgModule({
  exports: [ApplicationModule],
  providers: [
    { provide: RendererFactory2, useClass: HttpRendererFactory },
    { provide: ErrorHandler, useClass: HttpErrorHandler },
  ],
})
export class PlatformModule {}

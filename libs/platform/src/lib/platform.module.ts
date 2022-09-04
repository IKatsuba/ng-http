import {
  ApplicationInitStatus,
  ApplicationModule,
  ApplicationRef,
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
    { provide: ApplicationRef, useClass: ApplicationRef },
    { provide: ApplicationInitStatus, useClass: ApplicationInitStatus },
  ],
})
export class PlatformModule {}

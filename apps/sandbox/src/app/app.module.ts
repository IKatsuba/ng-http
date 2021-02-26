import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PlatformModule } from '@ng-http/platform';
import { CommonModule } from '@angular/common';
import { ServerModule } from '@ng-http/server';

@NgModule({
  declarations: [AppComponent],
  imports: [PlatformModule, CommonModule, ServerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

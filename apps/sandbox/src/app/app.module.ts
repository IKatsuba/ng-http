import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlatformModule } from '@ng-http/platform';
import { CommonModule } from '@angular/common';
import { ServerModule } from '@ng-http/server';
import { SomeControllerDirective } from './some-controller.directive';

@NgModule({
  declarations: [AppComponent, SomeControllerDirective],
  imports: [PlatformModule, CommonModule, ServerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

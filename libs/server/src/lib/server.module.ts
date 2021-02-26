import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { GetComponent } from './get/get.component';
import { ContentTypeHtmlDirective } from './controllers/content-type-html.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ServerComponent, GetComponent, ContentTypeHtmlDirective],
  exports: [ServerComponent, GetComponent, ContentTypeHtmlDirective],
})
export class ServerModule {}

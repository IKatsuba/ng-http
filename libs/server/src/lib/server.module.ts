import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { GetComponent } from './get/get.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ServerComponent, GetComponent],
  exports: [ServerComponent, GetComponent],
})
export class ServerModule {}

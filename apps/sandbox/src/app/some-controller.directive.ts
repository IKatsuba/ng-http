import { Directive, forwardRef } from '@angular/core';
import { Controller } from '@ng-http/server';
import { IncomingMessage, ServerResponse } from 'http';
import { Observable } from 'rxjs';

@Directive({
  selector: '[someController]',
  providers: [
    {
      provide: Controller,
      useExisting: forwardRef(() => SomeControllerDirective),
    },
  ],
})
export class SomeControllerDirective extends Controller {
  handle(
    req: IncomingMessage,
    res: ServerResponse
  ): void | Promise<void> | Observable<void> {
    res.end('Hello!');
  }
}

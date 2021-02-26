import { Directive, ElementRef, forwardRef } from '@angular/core';
import { Controller } from '../controller';
import { HttpElement } from '@ng-http/platform';
import { IncomingMessage, ServerResponse } from 'http';
import { Observable } from 'rxjs';

@Directive({
  selector: '[contentType="text/html"]',
  providers: [
    {
      provide: Controller,
      useExisting: forwardRef(() => ContentTypeHtmlDirective),
    },
  ],
})
export class ContentTypeHtmlDirective extends Controller {
  constructor(private elementRef: ElementRef<HttpElement>) {
    super();
  }

  handle(
    req: IncomingMessage,
    res: ServerResponse
  ): void | Promise<void> | Observable<void> {
    res.setHeader('Content-Type', 'text/html');

    res.end(
      this.elementRef.nativeElement.children.map((el) => el.toString()).join('')
    );
  }
}

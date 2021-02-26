import { Sanitizer, SecurityContext } from '@angular/core';

export class HttpSanitizer extends Sanitizer {
  sanitize(context: SecurityContext, value: string): string {
    return value;
  }
}

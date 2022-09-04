import { ResourceLoader } from '@angular/compiler';
import { readFile } from '@rxnode/fs';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

export class HttpResourceLoader implements ResourceLoader {
  get(url: string): Promise<string> | string {
    return lastValueFrom(
      readFile(url).pipe(map((result) => result.toString()))
    );
  }
}

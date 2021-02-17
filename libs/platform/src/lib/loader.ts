import { ResourceLoader } from '@angular/compiler';
import { readFile } from '@rxnode/fs';
import { map } from 'rxjs/operators';

export class HttpResourceLoader implements ResourceLoader {
  get(url: string): Promise<string> | string {
    return readFile(url)
      .pipe(map((result) => result.toString()))
      .toPromise();
  }
}

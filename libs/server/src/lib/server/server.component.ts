import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { Server } from '@rxnode/http';
import { EMPTY, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ServerOptions } from 'http';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: Server, useExisting: forwardRef(() => ServerComponent) },
  ],
})
export class ServerComponent extends Server {
  public listen$: Observable<void> = EMPTY;

  private _port!: number;

  constructor() {
    super();
  }

  @Input() set port(value: number) {
    if (this._port !== value) {
      this._port = value;
      this.listen$ = this.listen(value).pipe(
        tap(() => console.log(`Server stated on port ${value}`))
      );
    }
  }
}

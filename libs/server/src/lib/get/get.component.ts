import { ChangeDetectionStrategy, Component, Input, Self } from '@angular/core';
import { concatMap, filter } from 'rxjs/operators';
import { Server } from '@rxnode/http';
import { Controller } from '../controller';
import { defer } from 'rxjs';

@Component({
  selector: 'get',
  template: `
    <ng-container *ngIf="messages$ | async"></ng-container>
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetComponent {
  @Input() url!: string;

  messages$ = this.server.pipe(
    filter(
      ([req]) =>
        !!this.url && req.url?.indexOf(this.url) === 0 && req.method === 'GET'
    ),
    concatMap(([req, res]) =>
      defer(() => this.controller.handle(req, res) ?? Promise.resolve())
    )
  );

  constructor(private server: Server, @Self() private controller: Controller) {}
}

import { Observable } from 'rxjs';
import { IncomingMessage, ServerResponse } from 'http';

export abstract class Controller {
  abstract handle(
    req: IncomingMessage,
    res: ServerResponse
  ): void | Promise<void> | Observable<void>;
}

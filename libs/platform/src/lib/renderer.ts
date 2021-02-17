import {
  Injectable,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RendererType2,
} from '@angular/core';

@Injectable()
export class HttpRendererFactory implements RendererFactory2 {
  protected renderer: Renderer2;

  constructor() {
    this.renderer = new HttpRenderer();
  }

  end() {}

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    return this.renderer;
  }
}

export class HttpRenderer implements Renderer2 {
  destroyNode: (node: any) => void;

  get data(): { [key: string]: any } {
    return {};
  }

  createElement(name: string, namespace?: string | null): any {
    return {};
  }

  createText(value: string): any {
    return {};
  }

  selectRootElement(): any {
    return {};
  }

  addClass(el: any, name: string): void {}

  appendChild(parent: any, newChild: any): void {}

  createComment(value: string): any {
    return {};
  }

  destroy(): void {}

  insertBefore(parent: any, newChild: any, refChild: any): void {}

  listen(
    target: any,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void {
    return function () {};
  }

  nextSibling(node: any): any {
    return {};
  }

  parentNode(node: any): any {
    return {};
  }

  removeAttribute(el: any, name: string, namespace?: string | null): void {}

  removeChild(parent: any, oldChild: any): void {}

  removeClass(el: any, name: string): void {}

  removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {}

  setAttribute(
    el: any,
    name: string,
    value: string,
    namespace?: string | null
  ): void {}

  setProperty(el: any, name: string, value: any): void {}

  setStyle(
    el: any,
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {}

  setValue(node: any, value: string): void {}
}

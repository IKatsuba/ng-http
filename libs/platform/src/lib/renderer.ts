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

export class HttpElement {
  public children: HttpElement[] = [];
  private readonly classes: string[] = [];
  private readonly attrs: Map<string, string> = new Map();
  parent: HttpElement = null;
  constructor(private name: string) {}

  addClass(className: string) {
    this.classes.push(className);
  }

  appendChild(child: HttpElement) {
    this.children.push(child);
    child.parent = this;
  }

  insertBefore(newChild: HttpElement, refChild: HttpElement): void {
    const index = this.children.indexOf(refChild);

    if (index > -1) {
      this.children.splice(index, 0, newChild);
      refChild.parent = null;
    }
  }

  nextSibling(): HttpElement {
    const parent = this.parent;
    if (parent) {
      const index = parent.children.indexOf(this);

      return parent.children[index + 1];
    }

    return null;
  }

  removeAttribute(name: string): void {
    this.attrs.delete(name);
  }

  removeChild(oldChild: HttpElement): void {
    const index = this.children.indexOf(oldChild);
    if (index > -1) {
      this.children.splice(index, 1);
      oldChild.parent = null;
    }
  }

  removeClass(name: string): void {
    const index = this.classes.indexOf(name);

    if (index > -1) {
      this.classes.splice(index, 1);
    }
  }

  removeStyle(style: string, flags?: RendererStyleFlags2): void {}

  setAttribute(name: string, value: string): void {
    this.attrs.set(name, value);
  }

  setProperty(name: string, value: any): void {
    this[name] = value;
  }

  setStyle(style: string, value: any, flags?: RendererStyleFlags2): void {}

  setValue(value: string): void {
    this.setAttribute('value', value);
  }

  toString() {
    return `<${
      this.name
    }${this.classesToString()}${this.attrsToString()}>${this.childrenToString()}</${
      this.name
    }>`;
  }

  private classesToString() {
    if (this.classes.length) {
      return ` class="${this.classes.join(' ')}"`;
    }

    return '';
  }

  private attrsToString() {
    if (this.attrs.size) {
      return (
        ' ' +
        [...this.attrs].map(([key, value]) => `${key}="${value}"`).join(' ')
      );
    }

    return '';
  }

  private childrenToString() {
    if (this.children.length) {
      return this.children.map((child) => child.toString()).join('');
    }

    return '';
  }
}

export class TextHttpElement extends HttpElement {
  constructor(private text: string) {
    super('text');
  }

  toString() {
    return this.text;
  }
}

export class CommentHttpElement extends HttpElement {
  constructor(private comment: string) {
    super('comment');
  }

  toString() {
    return '';
  }
}

export class HttpRenderer implements Renderer2 {
  destroyNode: (node: any) => void;

  get data(): { [key: string]: any } {
    return {};
  }

  createElement(name: string, namespace?: string | null): HttpElement {
    return new HttpElement(name);
  }

  createText(value: string): any {
    return new TextHttpElement(value);
  }

  selectRootElement(): HttpElement {
    return new HttpElement('root');
  }

  addClass(el: HttpElement, name: string): void {
    el.addClass(name);
  }

  appendChild(parent: HttpElement, newChild: HttpElement): void {
    parent.appendChild(newChild);
  }

  createComment(value: string): CommentHttpElement {
    return new CommentHttpElement(value);
  }

  destroy(): void {}

  insertBefore(
    parent: HttpElement,
    newChild: HttpElement,
    refChild: HttpElement
  ): void {
    parent.insertBefore(newChild, refChild);
  }

  listen(
    target: any,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void {
    return function () {};
  }

  nextSibling(node: HttpElement): HttpElement | null {
    return node.nextSibling();
  }

  parentNode(node: HttpElement): HttpElement {
    return node.parent;
  }

  removeAttribute(
    el: HttpElement,
    name: string,
    namespace?: string | null
  ): void {
    el.removeAttribute(name);
  }

  removeChild(parent: HttpElement, oldChild: HttpElement): void {
    parent.removeChild(oldChild);
  }

  removeClass(el: HttpElement, name: string): void {
    el.removeClass(name);
  }

  removeStyle(
    el: HttpElement,
    style: string,
    flags?: RendererStyleFlags2
  ): void {
    el.removeStyle(style, flags);
  }

  setAttribute(
    el: HttpElement,
    name: string,
    value: string,
    namespace?: string | null
  ): void {
    el.setAttribute(name, value);
  }

  setProperty(el: HttpElement, name: string, value: any): void {
    el.setProperty(name, value);
  }

  setStyle(
    el: HttpElement,
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {
    el.setStyle(style, value, flags);
  }

  setValue(node: HttpElement, value: string): void {
    node.setValue(value);
  }
}

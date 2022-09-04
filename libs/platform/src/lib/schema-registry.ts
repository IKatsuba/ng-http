import { ElementSchemaRegistry } from '@angular/compiler';
import { SchemaMetadata, SecurityContext } from '@angular/core';

export class HttpElementSchemaRegistry extends ElementSchemaRegistry {
  hasProperty(_tagName: string, _propName: string): boolean {
    return true;
  }

  hasElement(_tagName: string, _schemaMetas: SchemaMetadata[]): boolean {
    return true;
  }

  getMappedPropName(propName: string): string {
    return propName;
  }

  getDefaultComponentElementName(): string {
    return 'ng-component';
  }

  securityContext(_tagName: string, _propName: string): any {
    return SecurityContext.NONE;
  }

  validateProperty(_name: string): { error: boolean; msg?: string } {
    return { error: false };
  }

  validateAttribute(_name: string): { error: boolean; msg?: string } {
    return { error: false };
  }

  allKnownElementNames(): string[] {
    return [];
  }

  normalizeAnimationStyleProperty(propName: string): string {
    return propName;
  }

  normalizeAnimationStyleValue(
    _camelCaseProp: string,
    _userProvidedProp: string,
    val: string | number
  ): { error: string; value: string } {
    return { error: '', value: val.toString() };
  }
}

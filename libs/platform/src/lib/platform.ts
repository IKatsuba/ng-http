import 'core-js/es/reflect';
import 'zone.js/dist/zone-node';

import {
  COMPILER_OPTIONS,
  createPlatformFactory,
  Sanitizer,
} from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { DOCUMENT } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';

import { HttpElementSchemaRegistry } from './schema-registry';
import { HttpSanitizer } from './sanitizer';

const COMMON_PROVIDERS = [
  { provide: DOCUMENT, useValue: {} },
  { provide: Sanitizer, useClass: HttpSanitizer, deps: [] },
];

const COMPILER_PROVIDERS = [
  {
    provide: COMPILER_OPTIONS,
    useValue: {
      providers: [
        {
          provide: ElementSchemaRegistry,
          useClass: HttpElementSchemaRegistry,
          deps: [],
        },
      ],
    },
    multi: true,
  },
];

export const platformHttpDynamic = createPlatformFactory(
  platformCoreDynamic,
  'httpDynamic',
  [...COMMON_PROVIDERS, ...COMPILER_PROVIDERS]
);

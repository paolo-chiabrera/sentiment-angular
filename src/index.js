import 'reflect-metadata';
import 'zone.js';

import {bootstrap} from '@angular/platform-browser-dynamic';

import {HTTP_PROVIDERS} from '@angular/http';

import './index.scss';

import {Main} from './app/main';
import {enableProdMode} from '@angular/core';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(Main, [HTTP_PROVIDERS]);

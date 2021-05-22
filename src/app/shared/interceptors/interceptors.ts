import {Provider} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from './request.interceptor';


export const interceptors: Provider[] = [
  {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
];

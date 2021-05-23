import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';

import {ModalService} from '../services/modal.service';
import {ShowMessageComponent} from '../modules/show-message/components/show-message/show-message.component';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  activeRequests = 0;

  constructor(
    private message: ModalService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.activeRequests++;

    return next.handle(request)
      .pipe(
        tap((response: HttpResponse<any>) => {
          if (response.body?.messages?.length) {
            this.message.open({
              component: ShowMessageComponent,
            });
            this.message.showMessage$.next(response.body.messages);
            this.message.messagesIcon$.next(false);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          if (this.activeRequests === 1) {
            this.message.open({
              component: ShowMessageComponent,
            });
          }
          if (error.status === 401) {
            this.message.showMessage$.next(['The working session is over. You need to re-register in the program.']);
          } else if (error.status === 400 || error.status === 500 || error.status === 404) {
            this.message.showMessage$.next(['An error occurred.']);
          } else {
            this.message.showMessage$.next(error.error.messages);
          }
          this.message.messagesIcon$.next(true);

          return throwError(error);
        }),
        finalize(() => {
          this.activeRequests--;
        })
      );
  }
}

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
import {LoadingService} from '../modules/loading/services/loading.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  activeRequests = 0;

  constructor(
    private loadingService: LoadingService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    this.activeRequests++;

    return next.handle(request)
      .pipe(
        tap((response: HttpResponse<any>) => {
          console.log('Success message');
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        }),
        finalize(() => {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            this.loadingService.hide();
          }
        })
      );
  }
}

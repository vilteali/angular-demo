import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { SpinnerService } from '../spinner/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor(private spinner: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    
    this.spinner.isLoading$.next(true);
    return next.handle(req)
    .pipe(
      tap({
        error: error => this.handleError(error)
      }),
      finalize(() => {
        this.spinner.isLoading$.next(false);
      })
    );


  }

  handleError(error: HttpErrorResponse) {
    return null;
  }
}

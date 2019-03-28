import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InterceptorErrorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 404) {
          console.log("Error 404")
        } else if (errorResponse.status === 403) {
          console.log("Error 403")
        } else if (errorResponse.status === 200) {
          console.log("Error 200")
        } else if (errorResponse.status === 400) {
          console.log("Error 400")
        } else

          return throwError(errorResponse);
      }));
  }
}

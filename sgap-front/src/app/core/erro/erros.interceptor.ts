import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "Ocorreu um erro desconhecido!";
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Erro do cliente: ${error.error.message}`;
        } else if (error.status === 401) {
          errorMessage = 'Você não tem autorização para acessar este recurso!';
        } else if (error.status === 403) {
          errorMessage = 'Você não tem permissão para acessar este recurso!';
        } else if (error.status === 404) {
          errorMessage = 'Recurso não encontrado!';
        } else if (error.status === 408) {
          errorMessage = 'Servidor demorou muito para responder!';
        } else if (error.status === 500) {
          errorMessage = 'Erro interno do Servidor!';
        }

        alert(errorMessage);
        return throwError(() => new Error('Ops, ocorreu um erro!'));
      })
    );
  }
}

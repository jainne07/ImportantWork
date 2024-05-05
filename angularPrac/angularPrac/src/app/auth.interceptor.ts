import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("request on its way")
    const modi=request.clone({headers: request.headers.append('Auth','ABC')})
    return next.handle(modi).pipe(
      tap((event:any)=>{
        console.log(event)
        if(event.type===HttpEventType.Response){
          console.log('response arrive')
          console.log(event.body)
        }
      })
    );
    //return next.handle(request);
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
  let token=localStorage.getItem('token');

  if(!!token){
    let cloneReq=req.clone({
      headers:req.headers.set('x-access-token',token)
    })
    console.log("JwtInterceptor -> intercept -> cloneReq", cloneReq)
    return next.handle(cloneReq);
  }
  else{
    return next.handle(req);
  }
  
  
  

  }
}

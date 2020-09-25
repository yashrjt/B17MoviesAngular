import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {
  catchError,
  map
} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  constructor(private http:HttpClient) { }

  //JS--truthy true,1 falsy  false,0,undefined,null

  isLoggedIn:BehaviorSubject<boolean>=new BehaviorSubject(this.checkToken());

  isLoggedInObservable:Observable<boolean>= this.isLoggedIn.asObservable();
  
  
  //post,get,put,delete

  checkToken(){
    let token= localStorage.getItem('token');
    if(!!token){
      return true;
    }
    else{
      return  false;
    }
    
  }

  login(loginObj){
    
    return  this.http.post('http://localhost:8080/api/login',loginObj,{headers: new HttpHeaders({'Content-Type':  'application/json'})})
    .pipe(
      map((res)=>{
      console.log("AuthService -> login -> res", res)
      localStorage.setItem('token',res['token']);
      this.isLoggedIn.next(true);
        return res['status'];

       
      }),
      catchError((err)=>{
          throw err;
      })
    )
  
    
  }

  logout(){
    console.log('service logout called')
    this.isLoggedIn.next(false);
    localStorage.removeItem('token');
  }

  register(registerObj){
      console.log("AuthService -> register -> registerObj", registerObj)
      return  this.http.post('http://localhost:8080/api/register',registerObj,{headers: new HttpHeaders({'Content-Type':  'application/json'})})
      .pipe(
        map((res)=>{
          return res;
        }),
        catchError((err)=>{
            throw err;
        })
      )
    
  }
}


// addSum(a:number,b:number):number{

//   return a+b
// }

//HttpClient.post(url: string, body: any): Observable
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private auth:AuthService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return this.isUserLoggedIn();
    
  }


  isUserLoggedIn():boolean{
    let status;

   
      this.auth.isLoggedInObservable.subscribe((res)=>{
        if(res){
        status=true;
        }
        else{
          status=false;
          this.router.navigate(['/login']);
        }
        
      })

      return status;
  }
}

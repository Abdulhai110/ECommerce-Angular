import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      let count:number=0
      console.log("Auth Guard");

      this.authService.isLoggedIn().subscribe({
        next :(x:any)=>{

          if(x.success){
            console.log('true');
            return true;
          }else{
            console.log('false');
            this.router.navigate(['/user/login']);
            // localStorage.setItem('token','')
            return false;
          }
        },
        error: (error:any)=>{
          console.log('err',error);
          this.router.navigate(['/user/login']);
          return false;

         },
        complete: ()=>{  }
          })

          // return false
  }

}

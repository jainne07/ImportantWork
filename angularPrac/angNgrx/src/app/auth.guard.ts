import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './home/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | any> | Promise<boolean | any> | any {
      return this.authService.isAuth()
      .then((auth: any) => {
          if (auth) {
            return true;
          } else {
           return this.router.navigate(['/']);
          }
        }
      );
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | any> | Promise<boolean | any> | any {
      return this.canActivate(route, state)
    }
}

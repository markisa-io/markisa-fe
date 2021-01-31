import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.currentUser$.pipe(
        map(auth => {
          if (auth){
            // Set the state to True if the user is logged in
            return true;
          }

          // Redirect user to login page with the return url when the user is not logged in
          this.router.navigate(['account/login'], {queryParams: {returnUrl: state.url}});
          return false;
        })
      );
  }

}
